import Head from 'next/head'
import Sidebar from '../components/sidebar'

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify</title>
        <link rel="icon" href="/spotify-icon.svg" />
      </Head>
      <main>
        <Sidebar/>
        {/* Side bar */}
      </main>
      <div>{/*Player*/}</div>
    </div>
  )
}
