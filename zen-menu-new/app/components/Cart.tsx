'use client'
import React from 'react'
import { CloseButton, IconButton, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Stack, ModalCloseButton, Heading } from '@chakra-ui/react'
import {HiOutlineShoppingCart} from 'react-icons/hi2';
import CartCard from './CartCard';
export default function Cart() {
    const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <div className='flex h-full'>
        <IconButton onClick={onOpen} variant='outline' fontSize='30px' colorScheme='orange' aria-label='Cart' icon={<HiOutlineShoppingCart/>}/>
        <div className='self-start rounded-full text-xs border border-orange-300 font-semibold text-orange-600 h-fit p-1 aspect-square'>3</div>
        <Modal size='full' isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>
                <ModalHeader className=' text-orange-500 font-sans font-bold'>Cart</ModalHeader>
                <ModalBody className='flex flex-col'>
                    <Stack>
                        <CartCard/>
                        <CartCard/>
                    </Stack>
                    <Heading size='xs' className='p-4 self-end'>Total price: 300 EGP</Heading>
                    <button className='p-2 m-2 font-sans font-semibold shadow bg-orange-700 hover:bg-orange-400 text-white rounded-md'>Finish Order</button>
                </ModalBody>
            </ModalContent>
        </Modal>
    </div>
  )
}
