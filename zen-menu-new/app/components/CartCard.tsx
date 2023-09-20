import { Heading, Image, Stack, Flex, Text, IconButton, Spacer } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import React from 'react'

type Props = {}

export default function CartCard({}: Props) {
  return (
    <div className='w-full h-fit rounded-xl border border-orange-400 shadow-md flex'>
        <Image src='/ProductImages/Cappuccino_at_Sightglass_Coffee.jpg' className='w-1/4 object-cover max-h-32 rounded-xl flex-shrink-0'/>
        <Stack className='m-2'>
            <Heading size='sm' className='text-orange-700'>Cappucino</Heading>
        
        </Stack>
        <Spacer/>
        <Flex className=' items-center mx-4'>
            <IconButton size='xs' icon={<MinusIcon/>} aria-label='remove' className='rounded-full text-[#BC5F00]'/>
            <Text className='px-4'>3</Text>
            <IconButton size='xs' icon={<AddIcon/>} aria-label='add' className='rounded-full text-[#BC5F00]'/>
        </Flex>
    </div>
  )
}