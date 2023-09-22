import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import SelectButton from './selectButton';

type Props = {
    Name: string,
    options: {[key: string]: number};
    isOption?: Boolean;
}


export default function Option({Name, options, isOption=false}: Props) {
    const [selected, setSelected] = useState<{[key: string]: Boolean}>(!isOption? {} : {[Object.keys(options)[0]]: true});
    const handleClick = (x: string) => {
        isOption? setSelected({[x]:(true)}):setSelected({...selected, [x]: (!selected[x]??true)})
    }
  return (
    <>
    <Heading size='sm'>{Name}</Heading>
    <Flex className=' flex-wrap items-center '>
        {Object.keys(options).map((x)=>{return(
            <SelectButton onClick={()=> {handleClick(x)}} highlighted={(selected[x]??false)} name={x}/>
        )})}
    </Flex>
    </>
  )
}