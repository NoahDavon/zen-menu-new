'use client'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, {useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import { Item } from './menu'
import { getAllItems } from '../firebase'
import { SearchIcon } from '@chakra-ui/icons'

type Props = {
    setSearchResults: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function SearchBar({setSearchResults}: Props) {
    const [allItems, setAllItems] = useState<Item[]>([]);
    useEffect(()=>{
        getAllItems().then((i)=> setAllItems(i));
    })
    const options = {
        includeScores: "true",
        keys: ["Name", "Category", "description"]
    }

    function handleSearch(e : React.ChangeEvent<HTMLInputElement>){
        if(e.target.value === '') setSearchResults([])
        else{
            const fuse = new Fuse(allItems, options)
            const results = fuse.search(e.target.value).sort((a,b) => (b.score as number) - (a.score as number)).map((i)=> i.item);
            console.log(results);
            setSearchResults(results);
        }
    }
  return (
    <InputGroup>
        <InputLeftElement pointerEvents='none'>
            <SearchIcon color='orange.400'/>
        </InputLeftElement>
    <Input focusBorderColor='orange.400' onChange={handleSearch} placeholder='Search for items'></Input>
    </InputGroup>
    
  )
}