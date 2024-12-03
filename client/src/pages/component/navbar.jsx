import { useState } from "react";
import shopCoIcon from "../../assets/shopco-icon.png";
import downArrow  from "../../assets/down-arrow.png";
import userIcon from "../../assets/navbar-user-icon.png";
import shoppingIcon from "../../assets/navbar-shoping-icon.png";
import searchIcon from "../../assets/navbar-search-icon.png";
import menuIcon from "../../assets/navbar-menu-icon.png";

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);

    return (
        <div className="bg-white">
            <div className="container mx-auto px-2 md:px-0 py-4">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="block lg:hidden">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" onClick={()=> setIsMenuOpen(!isMenuOpen)} className="flex justify-center items-center gap-1"><img src={menuIcon} className="" /></div>
                                {isMenuOpen && (
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                                    <li className="dropdown">
                                        <div tabIndex={1} role="button" onClick={()=> setIsShopOpen(!isShopOpen)} className="flex items-center gap-1">Shop <img src={downArrow} className="w-5 pt-1" /></div>
                                        {isShopOpen && (
                                        <ul tabIndex={1} className="dropdown-content menu bg-white rounded-box z-[1] w-32 p-2 shadow">
                                            <li><a>Item 1</a></li>
                                            <li><a>Item 2</a></li>
                                        </ul>
                                        )}
                                    </li>
                                    <li><a href="">On Sale</a></li>
                                    <li><a href="">New Arrivals</a></li>
                                    <li><a href="">Brands</a></li>
                                </ul>
                                )}
                            </div>
                        </div>
                        <a href=""><img src={shopCoIcon} alt="" /></a>
                    </div>
                    <ul className="lg:flex hidden gap-3 text-black text-lg font-semibold">
                        <li className="dropdown">
                            <div tabIndex={0} role="button" className="flex justify-center items-center gap-1">Shop <img src={downArrow} className="w-5 pt-1" /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow">
                              <li><a>Item 1</a></li>
                              <li><a>Item 2</a></li>
                            </ul>
                        </li>
                        <li><a href="">On Sale</a></li>
                        <li><a href="">New Arrivals</a></li>
                        <li><a href="">Brands</a></li>
                    </ul>
                    <div class="w-full hidden md:block max-w-sm min-w-[200px]">
                        <div className="relative flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                            </svg>
                            <input className="w-full bg-[#F0F0F0] placeholder:text-slate-400 text-black text-sm rounded-full pl-10 pr-3 py-2 focus:outline-none" placeholder="Search for products..." /> 
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-3">
                            <li className="block md:hidden"><a href=""><img src={searchIcon} alt="" /></a></li>
                            <li><a href=""><img src={shoppingIcon} alt="" /></a></li>
                            <li><a href="/login"><img src={userIcon} alt="" /></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;