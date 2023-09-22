'use client'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Image, Modal, ModalCloseButton, ModalContent,ModalBody, ModalHeader, ModalOverlay, Text, Heading, Spacer, Flex, IconButton, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Option from './option';
import AdditionalNotes from './AdditionalNotes';
import { Item } from './menu';
import { getAdditions } from '../firebase';
import { useCart } from 'react-use-cart';
export interface Option{
  Name: string,
  Options: {[key:string]: number},
  isOption?:boolean
}

export interface cartItem{
  id: string,
  price: number,
  Name: string,
  Options?: string[],
  Notes?: string,
  quantity?:number
}
type Props = {
  onOpen: ()=> void,
  onClose: () => void,
  isOpen: boolean,
  Item: Item
}
export default function ProductDetails({onOpen, onClose, isOpen, Item}: Props) {
  const {addItem} = useCart()
  const [count, setCount] = useState(1);
  function Counter({}) {
    return (
      <div className='w-full h-12 flex bg-white border border-orange-800 rounded-xl items-center shadow'>
          <Heading size='md' className='font-bold p-4 text-[#BC5F00]'>{Item.Name}</Heading>
          <Spacer/>
          <Flex className='w-1/3 items-center mx-4'>
              <IconButton onClick={()=> setCount(Math.max(0,count - 1))} icon={<MinusIcon/>} aria-label='remove' className='rounded-full text-[#BC5F00]'/>
              <Text className='px-4'>{count}</Text>
              <IconButton onClick={()=> setCount(Math.max(0, count + 1))} icon={<AddIcon/>} aria-label='add' className='rounded-full text-[#BC5F00]'/>
          </Flex>
      </div>
    )
  }
  const [additions, setAdditions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: {Name: string, price: number}[]}>({});
  const [finalPrice, setFinalPrice] = useState(Item.Price);
  const [notes, setNotes] = useState('');
  const handleNotes = (e: any)=> {
    setNotes(e.target.value);
  }
  useEffect(()=>{
    if(Item.Additions)getAdditions(Item as Item).then(adds => setAdditions(adds))
  },[])
  useEffect(()=>{
    var total = Item.Price;
    Object.values(selectedOptions).forEach((option)=> option.forEach((option) => total += option.price));
    setFinalPrice(total * count);
  },[count, selectedOptions])
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
                <Text className='text-center font-sans'>
                  {Item?.description}
                </Text>
                {additions.map((addition)=>
                <Option Name={addition.Name} isOption={addition.isOption} options={addition.Options} setSelectedOptions={setSelectedOptions} selectedOptions={selectedOptions}/>)}
                <AdditionalNotes handleNotes={handleNotes}/>
                <Text className='font-sans'>Price: {finalPrice} EGP</Text>
                <Button onClick={()=>{
                    var id = Item.Name
                    var ops: string[] = []
                    Object.values(selectedOptions).forEach(optionGroup => optionGroup.forEach(option => ops.push(option.Name)))
                    ops.forEach((option) => id += option);
                    id += notes
                    var cartItem : cartItem = {id: id, Name: Item.Name, Options:ops ??[], price: finalPrice, Notes: notes}
                    addItem(cartItem, count);
                    onClose();
                  }}variant='outline' colorScheme='orange' className='font-sans'>Add To Cart</Button>
              </Stack>
            </ModalBody>
        </ModalContent>
    </Modal>
    </>
  )
}