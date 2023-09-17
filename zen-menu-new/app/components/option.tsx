import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {
    options: Number[]
}

export default function Option({options}: Props) {
    const [selected, setSelected] = useState(null);
  return (
    <>
    <Heading size='md'>Option Name</Heading>
    <Flex className=' flex-wrap '>
        {options.map((x)=>{return(
            <div></div>
        )})}
    </Flex>
    </>
  )
}