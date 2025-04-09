import React, { use } from 'react';
import { FaRegHeart } from "react-icons/fa";
const Bidding = ({ bidding }) => {
    const allbiddings = use(bidding);
    return (
        <div className='w-4/6 bg-white rounded-3xl'>
            <table className="table">
                {/* head */}
                <thead className=''>
                    <tr className='text-black'>
                        <th className='py-6'>Items</th>
                        <th className='py-6'>Current Bid</th>
                        <th className='py-6'>Time Left</th>
                        <th className='py-6'>Bid Now</th>
                    </tr>
                </thead>
                {
                    allbiddings.map(bid =>
                        <>
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
                                    <th>
                                        <button className="btn btn-ghost btn-xs text-xl"><FaRegHeart /></button>
                                    </th>
                                </tr>
                            </thead>

                        </>)
                }
            </table>
        </div>
    );
};

export default Bidding;