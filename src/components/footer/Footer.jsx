import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center p-10 py-[100px] bg-white">
                <aside className='space-y-2'>
                    <a className="btn btn-ghost text-xl text-blue-700">AUCTION <span className="text-orange-300 font-black">GALLERY</span></a>
                   
                    <ul className='flex gap-4 font-bold'>
                        <li>Bid.</li>
                        <li>Win.</li>
                        <li>Own.</li>
                    </ul>
                    <ul className='flex gap-6'>
                        <li>Home</li>
                        <li>Auction</li>
                        <li>Categories</li>
                        <li>How to Work</li>
                    </ul>
                    <p>©{new Date().getFullYear()} AuctionHub. All rights reserved.</p>
                </aside>
               
            </footer>
        </div>
    );
};

export default Footer;