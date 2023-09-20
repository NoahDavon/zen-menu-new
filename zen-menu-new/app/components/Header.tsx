import React from 'react'
import { Text, Input, Flex, Stack, Spacer} from '@chakra-ui/react'
import Cart from './Cart'
export default function Header() {
  return (
    <div className='w-full'>
        <Flex className='items-center'>
            <Stack>
                <Text size='md m-4 font-normal' className=' self-start'>Good day,</Text>
                <Text className=' self-start mb-4 font-bold text-[#BC5F00]'>Noah</Text>
            </Stack>
            <Spacer/>
            <Cart/>
        </Flex>
        <Input placeholder='Search for items'/>
    </div>
  )
}
