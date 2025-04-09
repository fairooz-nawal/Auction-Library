
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Bidding from './components/bidding/Bidding'
import Favourite from './components/favourite/Favourite'
import { Suspense, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [markedBook, setMarkedBook] = useState([]);
  const bidding = fetch("./bidding.json").then(res => res.json());
  const [biddingDone, setBiddingDone] = useState([]);
  const handleAddBookMark = (bid,id) => {
    setMarkedBook([...markedBook, bid]);
    toast('Item is added to Favourite Section Successfully!!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type:"success",
      });
    setBiddingDone([...biddingDone, id]);
    // setBiddingDone((prev) => [...prev, id]);
  }
  const handleDeleteBookMark = (bookmark) =>{
    const remaining = markedBook.filter(marked => marked.id !== bookmark.id);
    setMarkedBook(remaining);
    const remainingBooks = biddingDone.filter(id => id !== bookmark.id);
    setBiddingDone(remainingBooks);
    toast('Item is deleted Successfully!!', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type:"warning",
      });
  }
  return (
    <>
      <div className="sora-regular max-w-full bg-gray-200">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="w-full p-[100px] space-y-4">
          <h1 className='text-4xl text-blue-950'>Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>
          <div className="flex  mx-auto gap-6">
            <Suspense fallback={<div><span className="loading loading-bars loading-xl"></span></div>}>
              <Bidding bidding={bidding}
                handleAddBookMark={handleAddBookMark}
                biddingDone={biddingDone}>
              </Bidding>
            </Suspense>
            <Favourite markedBook={markedBook}
                       handleDeleteBookMark={handleDeleteBookMark}>
            </Favourite>
          </div>
        </div>


        <Footer></Footer>
      </div>
    </>
  )
}

export default App
