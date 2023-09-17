'use client'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Image, Modal, ModalCloseButton, ModalContent,ModalBody, ModalHeader, ModalOverlay, useDisclosure, Text, Heading, Spacer, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import Option from './option';

type Props = {}

export default function ProductDetails({}: Props) {
    const {onOpen, isOpen, onClose} = useDisclosure();
  return (
    <>
    <Button onClick={onOpen}>Modal</Button>
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalCloseButton/>
            <ModalHeader className='flex flex-col'>
                <div className=' basis-10'/>
                <Image className='rounded-2xl' src='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg'/>
            </ModalHeader>
            <ModalBody>
                <Counter/>
                <Text className='text-center m-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero tenetur facilis placeat, incidunt distinctio sint minus corrupti nemo architecto cupiditate eligendi doloribus. Aperiam veritatis laborum minus nec
                </Text>
                <Option options={["milk", "no milk", "no milk", "no milk", "no milk", "no milk", "no milk"]}/>
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
  )
}

type CounterProps = {}

function Counter({}: CounterProps) {
  return (
    <div className='w-full h-12 flex bg-slate-200 rounded-xl items-center shadow'>
        <Heading size='md' className='font-bold p-4 text-[#BC5F00]'>Cappucino</Heading>
        <Spacer/>
        <Flex className='w-1/3 items-center mx-4'>
            <IconButton icon={<MinusIcon/>} aria-label='remove' className='rounded-full text-[#BC5F00]'/>
            <Text className='px-4'>3</Text>
            <IconButton icon={<AddIcon/>} aria-label='add' className='rounded-full text-[#BC5F00]'/>
        </Flex>
    </div>
  )
}