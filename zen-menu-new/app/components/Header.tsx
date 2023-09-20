import React from 'react'
import { Text, Input, Flex, Stack, IconButton, Spacer, Avatar, AvatarBadge, Badge } from '@chakra-ui/react'
import {HiShoppingCart} from 'react-icons/hi2';
export default function Header() {
  return (
    <div className='w-full'>
        <Flex className='items-center'>
            <Stack>
                <Text size='md m-4 font-normal' className=' self-start'>Good day,</Text>
                <Text className=' self-start mb-4 font-bold text-[#BC5F00]'>Noah</Text>
            </Stack>
            <Spacer/>
            <IconButton fontSize='30px' colorScheme='orange' aria-label='Cart' icon={<HiShoppingCart/>}/>
            <div className='self-start rounded-full text-xs border border-orange-300 font-semibold text-orange-600 h-fit p-1 aspect-square'>3</div>
                
        </Flex>
        <Input placeholder='Search for items'/>
    </div>
  )
}
