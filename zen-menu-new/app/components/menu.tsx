import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './productCard'
import BestSellers from './bestSellers'

type Props = {}

export default function Menu({}: Props) {
  return (
    <Box className='flex flex-col overflow-y-scroll w-full flex-grow basis-0 mx-3'>
        <BestSellers/>
        <ProductCard menu/>
        <ProductCard menu/>
        <ProductCard menu/>
        <ProductCard menu/>
        <ProductCard menu/>
        <ProductCard menu/>
        <ProductCard menu/>
        <ProductCard menu/>
    </Box>
  )
}