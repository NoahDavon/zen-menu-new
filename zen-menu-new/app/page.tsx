'use client'
import { Tab, TabList, Tabs, TabPanels, TabPanel, Skeleton, Box, SkeletonText, SkeletonCircle } from '@chakra-ui/react'
import Menu from './components/menu'
import ProductDetails from './components/productDetails'
import Header from './components/Header'
import {getCategories} from './firebase';
import { useEffect, useState } from 'react'
export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(()=>{
    getCategories().then(categories => setCategories(categories))
  },[]);
  return (
    <main className="flex min-h-screen flex-col items-center px-7 pt-10 font-sans">
      <Header/>
      {categories.length>0?<Tabs variant="soft-rounded" colorScheme='orange'>
        <TabList className=' max-w-[100vw] px-3 overflow-x-scroll m-4'>
          {categories.map(category =>
            <Tab fontSize='xs' className=' border flex-shrink-0 border-orange-200 m-0.5 shadow text-xs'>{category}</Tab>)}
        </TabList>
        <TabPanels>
          {categories.map(category =>
            <TabPanel className='w-11/12 overflow-y-scroll basis-0 flex-grow'>
              <Menu category={category}/>
            </TabPanel>)}
        </TabPanels>
      </Tabs> :
      <div className='w-full overflow-y-scroll basis-0 flex-grow'>
        {[...Array(10)].map(()=> <LoadingBox/>)}
      </div>
            
          }
    </main>
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
