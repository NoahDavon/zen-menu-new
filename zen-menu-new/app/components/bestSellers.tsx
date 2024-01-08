import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProductCard from './productCard'
import { Item } from './menu'
import { getItems, getOffers } from '../firebase'

type Props = {
    category?: string
}

export interface Offer extends Item {
  PromoPrice: number
}
export default function BestSellers({}: Props) {
  const [offers, setOffers] = useState<Offer[]>([]);
  useEffect(()=>{
    getOffers().then(items => setOffers(items));
  },[])
  return (
    <div className='w-full'>
      <Heading size='md' textColor='orange.500'>Offers & Bundles</Heading>
      <Box className='flex flex-row w-full overflow-x-scroll snap-mandatory snap-x'>
        {offers.map(item=> <ProductCard item={item}/>)}
      </Box>
    </div>
  )
}