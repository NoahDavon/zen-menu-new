'use client'
import React, { useEffect, useState } from 'react'
import { Item } from '../components/menu'
import { getAllItems } from '../firebase'
import ItemAvailability from '../components/ItemAvailability'
import { Stack } from '@chakra-ui/react'

type Props = {}

export default function Items({}: Props) {
    const [Items, setItems] = useState<string[]>([])
    useEffect(()=>{
        getAllItems().then(i => {setItems(i.map(x => x.Name))})
    })
  return (
    <Stack spacing='10'>{Items.map(i => <ItemAvailability ItemName={i}/>)}</Stack>
  )
}