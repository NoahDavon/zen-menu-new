import Image from 'next/image'
import ProductCard from './components/productCard'
import { Tab, TabList, Tabs, Box, Input } from '@chakra-ui/react'
import BestSellers from './components/bestSellers'
import Menu from './components/menu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-1">
      <Input placeholder='Search for items'/>
      <Tabs variant="soft-rounded">
        <TabList className='w-full overflow-x-scroll'>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
      </Tabs>
      <Menu/>
      <div className='flex-shrink h-7'>Hello</div>
    </main>
  )
}
