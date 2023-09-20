import { Tab, TabList, Tabs, Input, Heading, Text } from '@chakra-ui/react'
import Menu from './components/menu'
import ProductDetails from './components/productDetails'
import Header from './components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 pt-10 font-sans">
      <Header/>
      <Tabs variant="soft-rounded" colorScheme='orange'>
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
