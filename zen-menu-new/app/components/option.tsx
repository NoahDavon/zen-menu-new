import { Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import SelectButton from './selectButton';

type Props = {
    options: string[];
    isOption?: Boolean;
}


export default function Option({options, isOption=false}: Props) {
    const [selected, setSelected] = useState<{[key: string]: Boolean}>(!isOption? {} : {[options[0]]: true});
    const handleClick = (x: string) => {
        isOption? setSelected({[x]:(true)}):setSelected({...selected, [x]: (!selected[x]??true)})
    }
  return (
    <>
    <Heading size='sm'>Option Name</Heading>
    <Flex className=' flex-wrap justify-between items-center '>
        {options.map((x)=>{return(
            <SelectButton onClick={()=> {handleClick(x)}} highlighted={(selected[x]??false)} name={x}/>
        )})}
    </Flex>
    </>
  )
}