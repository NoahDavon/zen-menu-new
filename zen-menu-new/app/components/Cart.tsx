'use client'
import React, { useEffect } from 'react'
import { IconButton, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Stack, ModalCloseButton, Heading, Avatar, AvatarBadge } from '@chakra-ui/react'
import {HiOutlineShoppingCart} from 'react-icons/hi2';
import CartCard from './CartCard';
import { useCart } from 'react-use-cart';
import { cartItem } from './productDetails';
export default function Cart() {
    const {totalItems, isEmpty, cartTotal, items} = useCart()
    const {isOpen, onOpen, onClose} = useDisclosure();
    useEffect(()=>{
        if(isEmpty) onClose;
    },[isEmpty])
  return (
    <div className='flex h-full'>
        <IconButton onClick={onOpen} variant='ghost' aria-label='Cart' icon={
            <Avatar bg='orange.500' icon={<HiOutlineShoppingCart/>}>
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
                    <button className='p-2 m-2 font-sans font-semibold shadow bg-orange-700 hover:bg-orange-400 text-white rounded-md'>Finish Order</button>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
