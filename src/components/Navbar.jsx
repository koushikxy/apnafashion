import React from 'react'

import { FaBars , FaRegHeart, FaSearch,FaCartArrowDown} from "react-icons/fa";

import logo from '../Images/Logo/apnafashionlogo.png'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-8 py-4 cursor-pointer'>
                <div className='text-black text-2xl'>
                    <FaBars />
                </div>
                <div className='flex items-center pl-12'>
                    <img className='w-16' src={logo} alt="Logo" />
                    <h1 className='pl-2 text-3xl tracking-[3px] font-bold'>APNA FASHION</h1>
                </div>
                <div className='flex text-2xl gap-4'>
                    <FaSearch/>
                    <FaRegHeart/>
                    <FaCartArrowDown/>
                </div>
            </div>
        </>

    )
}

export default Navbar