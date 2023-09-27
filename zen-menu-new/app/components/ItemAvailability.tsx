import { Button, Flex, Input, Switch } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getItemDetails, updateItemDetails } from '../firebase';

type Props = {
    ItemName: string
}

export default function ItemAvailability({ItemName}: Props) {
    const [price, setPrice] = useState(0);
    const [available, setAvailable] = useState( false);
    useEffect(()=>{
        getItemDetails(ItemName).then(i=>{
            setPrice(i.Price);
            setAvailable(i.isAvailable);
        })
    }, [])
  return (
    <Flex className=' w-4/12'>{ItemName}: Price: <Input onChange={e => setPrice(parseInt(e.target.value))} value={price}/> Available: <Switch isChecked={available} onChange={(e)=> setAvailable(e.target.checked)}/> <Button onClick={()=> {
        updateItemDetails(ItemName, price, available);
    }}>Submit</Button></Flex>
  )
}