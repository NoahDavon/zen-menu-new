import { Tab, TabList, Tabs, Input, Heading, Text } from '@chakra-ui/react'
import Menu from './components/menu'
import ProductDetails from './components/productDetails'
import Header from './components/Header'
import {getCategories} from './firebase';
export default async function Home() {
  const categories: string[] = await getCategories();
  'use client'
  return (
    <main className="flex min-h-screen flex-col items-center px-7 pt-10 font-sans">
      <Header/>
      <Tabs variant="soft-rounded" colorScheme='orange'>
        <TabList className=' max-w-[100vw] px-3 overflow-x-scroll m-4'>
          {categories.map(category =>
            <Tab className='flex-shrink-0 border border-orange-200 m-0.5 shadow'>{category}</Tab>)}
        </TabList>
      </Tabs>
      <Menu/>
      <ProductDetails/>
    </main>
  )
}
