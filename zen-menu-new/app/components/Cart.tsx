'use client'
import React, { useEffect, useState } from 'react'
import { IconButton, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Stack, ModalCloseButton, Heading, Avatar, AvatarBadge, useToast, Tooltip } from '@chakra-ui/react'
import {HiOutlineShoppingCart} from 'react-icons/hi2';
import CartCard from './CartCard';
import { useCart } from 'react-use-cart';
import { cartItem } from './productDetails';
import { setOrder } from '../firebase';
export default function Cart() {
    const toast = useToast();
    const {totalItems, isEmpty, cartTotal, items, emptyCart, metadata, updateCartMetadata} = useCart()
    const {isOpen, onOpen, onClose} = useDisclosure();
    useEffect(()=>{
        if(isEmpty) onClose;
    },[isEmpty])
    function clickOnCart(){
        onOpen();
        toast({
            description: `Your cart is empty! :(`,
            duration: 1000,
            isClosable: false,
            colorScheme: 'orange',
            position: 'top-right',
        })
    }
  return (
    <div className='flex h-full'>
            <IconButton onClick={clickOnCart} variant='ghost' aria-label='Cart' icon={
                <Avatar className='shadow-md' bg='orange.500' icon={<HiOutlineShoppingCart/>}>
                    {!isEmpty?<AvatarBadge bg='orange.300' boxSize='1.25rem' fontSize='sm'>{totalItems}</AvatarBadge>:<></>}
                </Avatar>
            }/>
        {/* <div className='self-start rounded-full text-xs border border-orange-300 font-semibold text-orange-600 h-fit p-1 aspect-square'>3</div> */}
        <Modal size='full' isOpen={isOpen && !isEmpty} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>
                <ModalHeader className=' text-orange-500 font-sans font-bold'>Cart</ModalHeader>
                <ModalBody className='flex flex-col'>
                    <Stack>
                        {items.map((item)=> <CartCard item={item as cartItem}/>)}
                    </Stack>
                    <Heading size='xs' className='p-4 self-end'>Total price: {cartTotal} EGP</Heading>
                    <button className='p-2 m-2 font-sans font-semibold shadow bg-orange-700 hover:bg-orange-400 text-white rounded-md' onClick={()=>{
                        setOrder({Name: metadata?.Name as string, items: items, total: cartTotal})
                        var name = metadata?.Name
                        emptyCart();
                        updateCartMetadata({Name: name})
                        toast({
                            title: "Order taken!",
                            description: `Your order total is ${cartTotal} EGP, kindly proceed to the counter to complete payment`,
                            duration: 10000,
                            isClosable: true,
                            colorScheme: 'orange',
                            position: 'top'
                        })
                    }}>Finish Order</button>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
