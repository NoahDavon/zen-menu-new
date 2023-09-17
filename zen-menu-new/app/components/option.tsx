import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import SelectButton from './selectButton';

type Props = {
    options: string[];
}


export default function Option({options}: Props) {
    const [selected, setSelected] = useState<{[key: string]: Boolean}>({});
    const handleClick = (x: string) => {
        setSelected({...selected, [x]: (!selected[x]??true)})
    }
  return (
    <>
    <Heading size='md'>Option Name</Heading>
    <Flex className=' flex-wrap justify-between items-center '>
        {options.map((x)=>{return(
            <SelectButton onClick={()=> {handleClick(x)}} highlighted={(selected[x]??false)} name={x}/>
        )})}
    </Flex>
    </>
  )
}