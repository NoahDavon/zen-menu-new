import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SelectButton from './selectButton';
import { Option } from './productDetails';

type Props = {
    Name: string,
    options: {[key: string]: number};
    isOption?: Boolean;
    setSelectedOptions: React.Dispatch<React.SetStateAction<{[key: string]: {Name: string, price: number}[]}>>;
    selectedOptions: {[key: string]: {Name: string, price: number}[]};

}


export default function Option({Name, options, isOption=false, setSelectedOptions, selectedOptions}: Props) {
    const [selected, setSelected] = useState<{[key: string]: Boolean}>(!isOption? {} : {[Object.keys(options)[0]]: true});
    const handleClick = (x: string) => {
        isOption? setSelected({[x]:(true)}):setSelected({...selected, [x]: (!selected[x]??true)})
    }
    useEffect(()=>{
        var sum: {Name: string, price: number}[] = [];
        Object.keys(selected).forEach((addition)=> {
            if(selected[addition]){
                sum.push({Name: addition, price: options[addition]})
            }
        });
        setSelectedOptions({...selectedOptions, [Name]: sum})
    },[selected])
  return (
    <>
    <Heading size='sm'>{Name} <Text fontFamily='sans-serif' fontSize='2xs'>{isOption? "  (Select one)" : "  (Select many)"}</Text></Heading>
    <Flex className=' flex-wrap items-center '>
        {Object.keys(options).map((x)=>{return(
            <SelectButton onClick={()=> {handleClick(x)}} highlighted={(selected[x]??false)} name={x}/>
        )})}
    </Flex>
    </>
  )
}