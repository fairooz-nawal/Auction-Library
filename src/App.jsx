import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
function App() {
  

  return (
    <>
    <div className="sora-regular max-w-full ">
    <Navbar></Navbar>
    <Banner></Banner>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
