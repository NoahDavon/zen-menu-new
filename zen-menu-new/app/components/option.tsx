import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SelectButton from './selectButton';
import { Addition, Option } from './productDetails';

type Props = {
    Name: string,
    options: Addition[]
    isOption?: Boolean;
    setSelectedOptions: React.Dispatch<React.SetStateAction<{[key: string]: {Name: string, price: number}[]}>>;
    selectedOptions: {[key: string]: {Name: string, price: number}[]};

}


export default function Option({Name, options, isOption=false, setSelectedOptions, selectedOptions}: Props) {
    const [selected, setSelected] = useState<{[key: string]: Boolean}>(!isOption? {} : {[options.find(x => x.Price==0)?.Name??""]: true});
    const handleClick = (x: string) => {
        isOption? setSelected({[x]:(true)}):setSelected({...selected, [x]: (!selected[x]??true)})
    }
    useEffect(()=>{
        var sum: {Name: string, price: number}[] = [];
        Object.keys(selected).forEach((addition)=> {
            if(selected[addition]){
                sum.push({Name: addition, price: options.find(x => x.Name == addition)?.Price?? 0})
            }
        });
        setSelectedOptions({...selectedOptions, [Name]: sum})
    },[selected])
  return (
    <>
    <Heading size='sm'>{Name} <Text fontFamily='sans-serif' fontSize='2xs'>{isOption? "  (Select one)" : "  (Select one or more)"}</Text></Heading>
    <Flex className=' flex-wrap items-center '>
        {Object.keys(options).map((x)=>{return(
            <SelectButton onClick={()=> {handleClick(x)}} highlighted={(selected[x]??false)} name={x}/>
        )})}
    </Flex>
    </>
  )
}