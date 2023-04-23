import Sidebar from '../components/sidebar'
import ContentRight from '/src/components/content/contentRight'
import ContentLeft from '/src/components/content/contentLeft'

export default function Home() {
  return (
    <div className='w-full min-h-screen bg-white flex flex-row'>
      <Sidebar />
      <ContentLeft />
      <ContentRight />
    </div>
  )
}
