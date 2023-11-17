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
    const [audio, setAudio] = useState<HTMLAudioElement|null>(null)
    const [playAudio,setPlayAudio] = useState<boolean>(false);
    useEffect(() => {
        console.log("Rendered again, audio");
        setAudio(new Audio('https://mingosounds.com/wp-content/uploads/2021/06/Bleep-SoundBible.com-1927126940.mp3')) // only call client

    }, [])

    useEffect(()=>{
        var unsub = unSubscribeToDB(setOrders, setPlayAudio);
        return unsub;
    },[])

    useEffect(()=>{
        if(audio && playAudio){
            audio.play();
            setPlayAudio(false);
        }
    },[playAudio, audio])

  return (
    <Flex className=' flex-wrap'>
        {orders?.map(order=>
            <div className='p-4 border'><div>{(new Date()).toLocaleString()}</div><div className=''>{order.Name}</div><div>{order.items?.map(item => 
            <div>{`${item.Name} x${item.quantity}, ${item.Options.map(option=> `+${option} `)}, ${item.Notes}`}</div>)}<div>{order.total} EGP</div></div><Button onClick={()=>{
                removeItem(order.id)
            }}>Close</Button></div>)}
    </Flex>
  )
}