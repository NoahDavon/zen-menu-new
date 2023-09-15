import Image from 'next/image'
import ProductCard from './components/productCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <ProductCard menu/>
    </main>
  )
}
