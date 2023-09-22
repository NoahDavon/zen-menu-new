import { Heading, Image, Stack, Flex, Text, IconButton, Spacer } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import React from 'react'
import { cartItem } from './productDetails';
import { useCart } from 'react-use-cart';

type Props = {
  item: cartItem
}

export default function CartCard({item}: Props) {
  const {updateItemQuantity} = useCart();
  return (
    <div className='w-full h-fit rounded-xl border border-orange-400 shadow-md flex'>
        <Stack className='m-2'>
        <Heading size='sm' className='text-orange-700'>{item.Name}</Heading>
        <Flex fontSize='2xs' fontFamily='sans-serif'>{item.Options?.map((option)=> ' +' + option)}</Flex>
        <Text fontSize='2xs' className='font-sans'>{item.Notes}</Text>
        </Stack>
        <Spacer/>
        <Flex className=' items-center mx-4'>
            <IconButton onClick={()=> updateItemQuantity(item.id, item.quantity as number - 1)} size='xs' icon={<MinusIcon/>} aria-label='remove' className='rounded-full text-[#BC5F00]'/>
            <Text className='px-4 font-sans'>{item.quantity}</Text>
            <IconButton onClick={()=> updateItemQuantity(item.id, item.quantity as number + 1)} size='xs' icon={<AddIcon/>} aria-label='add' className='rounded-full text-[#BC5F00]'/>
        </Flex>
    </div>
  )
}