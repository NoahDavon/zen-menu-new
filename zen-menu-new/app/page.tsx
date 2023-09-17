import { Tab, TabList, Tabs, Input } from '@chakra-ui/react'
import Menu from './components/menu'
import ProductDetails from './components/productDetails'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-1">
      <Input placeholder='Search for items'/>
      <Tabs variant="soft-rounded">
        <TabList className=' max-w-[100vw] px-3 overflow-x-scroll'>
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
      <ProductDetails/>
    </main>
  )
}
