'use client'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Image, Modal, ModalCloseButton, ModalContent,ModalBody, ModalHeader, ModalOverlay, Text, Heading, Spacer, Flex, IconButton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Option from './option';
import AdditionalNotes from './AdditionalNotes';
import { Item } from './menu';
import { getAdditions } from '../firebase';
export interface Option{
  Name: string,
  Options: {[key:string]: number},
  isOption?:boolean
}
type Props = {
  onOpen: ()=> void,
  onClose: () => void,
  isOpen: boolean,
  Item?: Item
}
export default function ProductDetails({onOpen, onClose, isOpen, Item}: Props) {
  function Counter({}) {
    return (
      <div className='w-full h-12 flex bg-white border border-orange-800 rounded-xl items-center shadow'>
          <Heading size='md' className='font-bold p-4 text-[#BC5F00]'>{Item?.Name}</Heading>
          <Spacer/>
          <Flex className='w-1/3 items-center mx-4'>
              <IconButton icon={<MinusIcon/>} aria-label='remove' className='rounded-full text-[#BC5F00]'/>
              <Text className='px-4'>3</Text>
              <IconButton icon={<AddIcon/>} aria-label='add' className='rounded-full text-[#BC5F00]'/>
          </Flex>
      </div>
    )
  }
  const [additions, setAdditions] = useState<Option[]>([]);
  useEffect(()=>{getAdditions(Item as Item).then((adds)=> setAdditions(adds))},[])
  return (
    <>
    <Modal size='full' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            <ModalCloseButton/>
            <ModalHeader className='flex flex-col'>
                <div className=' basis-10'/>
                <Image className='rounded-2xl' src='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg'/>
            </ModalHeader>
            <ModalBody>
              <Stack>
                <Counter/>
                <Text className='text-center'>
                  {Item?.description}
                </Text>
                {additions.map((addition)=>
                <Option Name={addition.Name} isOption={addition.isOption} options={addition.Options}/>)}
                <AdditionalNotes/>
                <Button variant='outline'>Add To Cart</Button>
              </Stack>
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
  )
}