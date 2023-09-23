import React, { useEffect } from 'react'
import { Text, Input, Flex, Stack, Spacer} from '@chakra-ui/react'
import Cart from './Cart'
import { useCart } from 'react-use-cart'
type Props = {
  name : string
}
export default function Header({name} : Props) {
  const {emptyCart, updateCartMetadata} = useCart();
  useEffect(()=>{ return emptyCart()},[])
  useEffect(()=>{
    updateCartMetadata({Name: name})
  }, [name])
  return (
    <div className='w-full'>
        <Flex className='items-center'>
            <Stack>
                <Text size='md m-4 font-normal' className=' self-start'>Good day,</Text>
                <Text className=' self-start mb-4 font-bold text-[#BC5F00]'>{name}</Text>
            </Stack>
            <Spacer/>
            <Cart/>
        </Flex>
        <Input placeholder='Search for items'/>
    </div>
  )
}
