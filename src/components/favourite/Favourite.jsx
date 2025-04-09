
import { FaRegHeart } from "react-icons/fa";
import Empty from './Empty';

import BookmarkCollection from './BookmarkCollection';
const Favourite = ({markedBook}) => {
    console.log(markedBook);
    let totalAmount = 0;
    if(markedBook.length > 0){
        totalAmount = totalAmount + markedBook.map(bookmark => bookmark.currentBidPrice).reduce((a, b) => a + b); 
    }
    
    return (
        <div className='col-span-2 rounded-3xl text-center'>
            <div className=" bg-white space-y-5 p-5 rounded-2xl">
                <div className="flex items-center gap-4 justify-center">
                    <FaRegHeart className='text-2xl' />
                    <h1 className='text-2xl font-bold'> Favorite Items</h1>
                </div>
                <hr className='text-gray-300' />
                {markedBook.length > 0 ? <BookmarkCollection markedBook = {markedBook}></BookmarkCollection> : <Empty></Empty>}
                <hr className='text-gray-300' />
                <div className="flex justify-between">
                    <h1 className='text-xl font-bold'>Total bids Amount</h1>
                    <p className='text-xl text-gray-600 font-bold'>$ {totalAmount}</p>
                </div>
            </div>
        </div>
    );
};

export default Favourite;