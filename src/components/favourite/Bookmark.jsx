import React from 'react';

const Bookmark = ({markedBook}) => {
   console.log(markedBook);
   const {image,title,currentBidPrice,bidsCount} = markedBook;
    return (
        <div>
            <div className="flex gap-3 space-y-3 mt-3 mb-2">
                <div className="w-[100px]">
                    <img className='w-full' src={image} alt="" />
                </div>
                <div className="w-[250px] text-start">
                    <h1>{title}</h1>
                    <div className="flex gap-4">
                        <p>$ {currentBidPrice}</p>
                        <p>Bids: {bidsCount}</p>
                    </div>
                </div>
                <div className="">X</div>
            </div>
            <hr className='text-gray-300 h-2' />
        </div>
       
    );
};

export default Bookmark;