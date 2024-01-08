'use client'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import BestSellers, { Offer } from './bestSellers'
import { getItems } from '../firebase'
import { Option } from './productDetails'

type Props = {
  category?: string
  searchItems?: Offer[];
}

export interface Item {
  Name: string,
  Category: string,
  Price: number,
  Description?: string,
  Additions?: Option[],
}

export default function Menu({category, searchItems}: Props) {
  const [items, setItems] = useState<Offer[]>([]);
  useEffect(()=>{
    if(!category) setItems(searchItems?? []);
    else 
    {getItems(category).then((items) => {setItems(items)})}
  }, [searchItems])
  return (
    <Box className='flex items-center flex-col overflow-x-clip w-[90vw] mx-3'>
        <BestSellers/>
        {items.map(item => 
          <ProductCard item={item} menu/>
        )}
    </Box>
  )
}