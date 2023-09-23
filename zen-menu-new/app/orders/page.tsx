'use client'
import { Button, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { removeItem, unSubscribeToDB } from '../firebase';

type Props = {}

export interface Order{
    id: string,
    Name: string,
    total: number,
    items: {Name: string, Notes: string, Options: string[], quantity: number}[]
}
export default function Orders({}: Props) {
    const [orders, setOrders] = useState<Order[]>([]);
    useEffect(()=>{
        var unsub = unSubscribeToDB(setOrders);
        console.log(orders);
        return unsub;
    },[])
  return (
    <Flex className=' flex-wrap'>
        {orders?.map(order=>
            <div className='p-4 border'><div className=''>{order.Name}</div><div>{order.items?.map(item => 
            <div>{`${item.Name} x${item.quantity}, ${item.Options.map(option=> `+${option} `)}, ${item.Notes}`}</div>)}<div>{order.total} EGP</div></div><Button onClick={()=>{
                removeItem(order.id)
            }}>Close</Button></div>)}
    </Flex>
  )
}