'use client'
import {Text, Image, Tab, TabList, Tabs, TabPanels, TabPanel, Skeleton, Box, SkeletonText,Modal, ModalOverlay, ModalContent, ModalBody, useDisclosure, Input, Button } from '@chakra-ui/react'
import Menu, { Item } from './components/menu'
import Header from './components/Header'
import {getCategories} from './firebase';
import { useEffect, useState } from 'react'
import { CartProvider } from 'react-use-cart';
import SearchBar from './components/SearchBar';
import { Offer } from './components/bestSellers';
import StartupModal from './components/StartupModal';
export default function Home() {
  const [searchResults, setSearchResults] = useState<Offer[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(()=>{
    onOpen();
    getCategories().then(categories => setCategories(categories))
  },[]);
  const [name, setName] = useState('');
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <CartProvider>
    <main className="flex h-[100vh] flex-col items-center px-7 pt-10 font-sans overflow-x-clip">
      <StartupModal isOpen={isOpen} onClose={onClose} setName={setName} name={name}/>
      <Header name={name}/>
      <SearchBar setSearchResults={setSearchResults}/>
      {searchResults.length===0?categories.length>0?
      <Tabs variant="soft-rounded" colorScheme='orange' className=' basis-0 grow min-h-0 overflow-x-clip'>
        <TabList className=' max-w-[100vw] px-3 overflow-x-scroll m-4 mb-0'>
          {categories.map(category =>
            <Tab fontSize='xs' className=' border flex-shrink-0 border-orange-200 m-0.5 shadow text-xs'>{category}</Tab>)}
        </TabList>
        <TabPanels className='flex flex-col flex-grow h-full overflow-x-clip items-center'>
          {categories.map(category =>
            <TabPanel className='w-11/12 overflow-y-scroll h-full flex flex-col overflow-x-clip items-center'>
              <Menu category={category}/>
            </TabPanel>)}
        </TabPanels>
      </Tabs> :
      <div className='w-full overflow-y-scroll basis-0 flex-grow'>
        {[...Array(10)].map(()=> <LoadingBox/>)}
      </div>  :
      <Menu searchItems={searchResults}/>
            
          }
    </main>
    </CartProvider>
  )
}


function LoadingBox() {
  return (
    <Box className='my-3 w-full h-24 border shadow p-2 rounded-lg flex'>
      <Skeleton className='h-full w-1/4 flex-shrink-0 rounded-xl'></Skeleton>
      <SkeletonText noOfLines={3} className='h-full m-4 flex-shrink w-full'/>
    </Box>
  )
}
