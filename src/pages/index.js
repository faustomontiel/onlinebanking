import { Inter } from 'next/font/google'
import Sidebar from '../components/sidebar'
const inter = Inter({ subsets: ['latin'] })
import ContentRight from '/src/components/content/contentRight'

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar/>
      <section className='flex-1 bg-white'>Content left</section>
      <ContentRight/>
    </div>    
  )
}
