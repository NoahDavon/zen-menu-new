import { Tab, TabList, Tabs, Input, Heading, Text } from '@chakra-ui/react'
import Menu from './components/menu'
import ProductDetails from './components/productDetails'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 pt-10 font-sans">
      <Text size='md m-4 font-normal' className=' self-start'>Good day,</Text>
      <Text className=' self-start mb-4 font-bold text-[#BC5F00]'>Noah</Text>
      <Input placeholder='Search for items'/>
      <Tabs variant="soft-rounded">
        <TabList className=' max-w-[100vw] px-3 overflow-x-scroll m-4'>
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
