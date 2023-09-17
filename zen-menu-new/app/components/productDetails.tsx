'use client'
import { Button, Image, Modal, ModalCloseButton, ModalContent,ModalBody, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'

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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eos iusto pariatur, odit commodi ad odio quae a atque nulla, distinctio ratione! Repudiandae excepturi eveniet voluptas recusandae dignissimos facere autem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae porro facere! Eius, enim culpa. Adipisci facere in, rerum neque voluptates officia omnis alias. Facere laborum sit perferendis vitae quidem.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nam corporis. Impedit, magnam dolorum culpa mollitia est voluptatum consequuntur nisi neque odio officiis molestiae in voluptates. Placeat magnam commodi impedit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur eius, odit natus dolor accusantium asperiores quidem obcaecati neque sequi nihil voluptatem officia eligendi reprehenderit maiores, inventore esse tempora nesciunt!
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
  )
}