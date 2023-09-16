import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './productCard'

type Props = {
    category?: string
}

export default function BestSellers({}: Props) {
  return (
    <div className='w-full'>
        <Heading>Best Sellers</Heading>
        <Box className='flex flex-row w-full overflow-x-scroll'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Box>
    </div>
  )
}