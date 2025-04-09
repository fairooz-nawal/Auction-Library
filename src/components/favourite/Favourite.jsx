import React from 'react';
import { FaRegHeart } from "react-icons/fa";
const Favourite = () => {
    return (
        <div className='w-2/6 rounded-3xl text-center'>
            <div className=" bg-white space-y-5 p-5 rounded-2xl">
                <div className="flex items-center gap-4 justify-center">
                    <FaRegHeart className='text-2xl'/>
                    <h1 className='text-2xl'> Favorite Items</h1>
                </div>
                <hr className='text-gray-300' />
                <h1 className='text-xl'>No favourites yet</h1>
                <p className='text-gray-600'>Click the heart icon on any item to add it to your favorites</p>
                <hr className='text-gray-300' />
                <div className="flex justify-between">
                    <h1 className='text-xl'>Total bids Amount</h1>
                    <p className='text-xl text-gray-600'>$0000</p>
                </div>
            </div>
        </div>
    );
};

export default Favourite;