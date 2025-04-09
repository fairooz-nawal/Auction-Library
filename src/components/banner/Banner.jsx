import React from 'react';
import bg from "../../../assets/Banner-min.jpg"
const Banner = () => {
    return (
        <div className='h-[500px] relative'>
            <img className='w-full h-full object-cover' src={bg} alt="" />

            <div className="absolute top-1/4 left-[120px] w-1/3 text-white space-y-4">
                <h1 className='text-4xl'>Bid on Unique Items from Around the World</h1>
                <p className='text-gray-300'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className="btn">Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;