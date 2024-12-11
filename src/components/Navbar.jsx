import React from 'react'
import { appleImg, bagImg, searchImg } from "../utils"
const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center mb-20'>
            <nav className='w-full screen-max-width flex'>
                <img src={appleImg}  width={14} height={18}/>
                
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {["Store", "Mac", "iPhone", "Support"].map((navText, idx) => (
                    <div key={idx} className='cursor-pointer text-sm text-gray px-5 hover:text-white transition-all'>{navText}</div>
                ))}
                </div>

                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg}  width={18} height={18} />
                    <img src={bagImg}  width={18} height={18} />
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar
