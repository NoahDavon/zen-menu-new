'use client'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import BestSellers from './bestSellers'
import { getItems } from '../firebase'

type Props = {
  category: string
}

export interface Item {
  Name: string,
  Category: string,
  Price: number,
  description?: string,
  Additions?: string[]
}

export default function Menu({category}: Props) {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(()=>{
    getItems(category).then((items) => {setItems(items)})
  })
  return (
    <Box className='flex items-center flex-col overflow-y-scroll w-full flex-grow basis-0 mx-3'>
        <BestSellers/>
        {items.map(item => 
          <ProductCard item={item} menu/>
        )}
    </Box>
  )
}