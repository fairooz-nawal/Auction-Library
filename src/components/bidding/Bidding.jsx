import React, { use } from 'react';
import { FaHeart } from "react-icons/fa";
const Bidding = ({ bidding, handleAddBookMark, biddingDone }) => {
    const allbiddings = use(bidding);
    return (
        <div className='w-4/6 bg-white rounded-3xl'>
            <table className="table">
                {/* head */}
                <thead className=''>
                    <tr className='text-black'>
                        <th className='py-6'>Items</th>
                        <th className='py-6'>Current Bid Price</th>
                        <th className='py-6'>Time Left</th>
                        <th className='py-6'>Bid Now</th>
                    </tr>
                </thead>
                {
                    allbiddings.map((bid, index) =>
                        <React.Fragment key={index}>
                            <thead>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className=" h-20 w-20">
                                                    <img
                                                        src={bid.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-500">{bid.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="font-bold text-gray-500">$ {bid.currentBidPrice}</div>

                                    </td>
                                    <td><div className="font-bold text-gray-500">{bid.timeLeft}</div></td>
                                    <td>
                                        <button
                                            onClick={() => handleAddBookMark(bid, bid.id)}
                                            className={`text-xl ${biddingDone.includes(bid.id) ? 'text-red-500 cursor-not-allowed' : ''}`}
                                            disabled={biddingDone.includes(bid.id)}
                                        >
                                            <FaHeart />
                                        </button>
                                    </td>
                                </tr>
                            </thead>

                        </React.Fragment>)
                }
            </table>
        </div>
    );
};

export default Bidding;