import React from 'react'
import { IconButton } from '@chakra-ui/react'
import {HiShoppingCart} from 'react-icons/hi2';
export default function Cart() {
  return (
    <div>
        <IconButton fontSize='30px' colorScheme='orange' aria-label='Cart' icon={<HiShoppingCart/>}/>
        <div className='self-start rounded-full text-xs border border-orange-300 font-semibold text-orange-600 h-fit p-1 aspect-square'>3</div>
    </div>
  )
}
