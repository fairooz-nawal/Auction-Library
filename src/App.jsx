
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Bidding from './components/bidding/Bidding'
import Favourite from './components/favourite/Favourite'
import { Suspense } from 'react'
function App() {

  const bidding = fetch("./bidding.json").then(res => res.json())
  return (
    <>
      <div className="sora-regular max-w-full bg-gray-200">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="w-full p-[100px] space-y-4">
          <h1 className='text-4xl text-blue-950'>Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>
          <div className="flex  mx-auto gap-6">
            <Suspense fallback={<div><span className="loading loading-bars loading-xl"></span></div>}>
              <Bidding bidding={bidding}></Bidding>
            </Suspense>
            <Favourite></Favourite>
          </div>
        </div>


        <Footer></Footer>
      </div>
    </>
  )
}

export default App
