'use client'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import BestSellers from './bestSellers'
import { getItems } from '../firebase'

type Props = {
  category?: string
  searchItems?: Item[];
}

export interface Item {
  Name: string,
  Category: string,
  Price: number,
  description?: string,
  Additions?: string[]
}

export default function Menu({category, searchItems}: Props) {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(()=>{
    if(!category) setItems(searchItems?? []);
    else 
    {getItems(category).then((items) => {setItems(items)})}
  }, [searchItems])
  return (
    <Box className='flex items-center flex-col overflow-x-clip w-full mx-3'>
        <BestSellers/>
        {items.map(item => 
          <ProductCard item={item} menu/>
        )}
    </Box>
  )
}