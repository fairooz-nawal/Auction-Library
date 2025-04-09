import { IoIosNotificationsOutline } from "react-icons/io";
import avatar from "../../../assets/avatar.png"
const Navbar = () => {
    const link = <>
    <li className="text-[16px] font-bold"><a>Home </a></li>
    <li className="text-[16px] font-bold"><a>Auction</a></li>
    <li className="text-[16px] font-bold"><a>Categories</a></li>
    <li className="text-[16px] font-bold"><a>How to Work</a></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-[100px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-blue-700">AUCTION <span className="text-orange-300 font-black">GALLERY</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-6">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-2">
                    <button className=" bg-gray-200 w-[40px] h-[40px] rounded-full"><IoIosNotificationsOutline className="text-4xl mx-auto" /></button>
                    <button className=" bg-gray-200 w-[40px] h-[40px] rounded-full"><img src={avatar} alt="" /></button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;