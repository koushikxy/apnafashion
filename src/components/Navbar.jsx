import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars, FaRegHeart, FaSearch, FaCartArrowDown, FaTimes } from "react-icons/fa";

import { FaUser, FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaSnapchat, FaYoutube } from "react-icons/fa";

import logo from '../Images/Logo/apnafashionlogo.png'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handelClick = () => setClick(!click);

    return (
        <>
            <div className='flex justify-between items-center cursor-pointer border-b-2 px-16 py-3'>
                <div>
                    <div className='left-0 z-20 cursor-pointer'>
                        <div onClick={handelClick} >
                            {!click ? <FaBars className='text-black text-3xl' /> : <FaTimes className='text-black text-3xl' />}

                        </div>
                    </div>
                </div>
                <div className='flex items-center pl-20'>
                    <img className='w-16' src={logo} alt="Logo" />
                    <h1 className='pl-2 text-3xl tracking-[3px] font-bold'>APNA FASHION</h1>
                </div>
                <div className='flex text-2xl gap-4'>
                    <FaSearch />
                    <FaRegHeart />
                    <FaCartArrowDown />
                </div>
            </div >
            <ul className={!click ? 'hidden' : 'block p-4 h-screen w-[22vw] bg-black text-white'}>
                <Link to='/Login'><div className='flex items-center gap-2 text-2xl font-semibold tracking-[2px] mb-6 py-4 pl-5 border-b-2'>
                    <FaUser />
                    <li className=' '>LOGIN</li>
                    <FaArrowRight className='ml-32 border-2 p-1 rounded-xl' />
                </div></Link>
                <Link to='/Home'><li className='text-lg font-semibold tracking-[2px] hover:border-y-2 py-4 pl-5 hover:border-white'>FEED</li></Link>
                <Link to='/Offer'><li className='text-lg font-semibold tracking-[2px] hover:border-y-2 py-4 pl-5 hover:border-white'>OFFER</li></Link>
                <Link to='/Fanbook'><li className='text-lg font-semibold tracking-[2px] hover:border-y-2 py-4 pl-5 hover:border-white'>FANBOOK</li></Link>
                <Link to='/About'><li className='text-lg font-semibold tracking-[2px] hover:border-y-2 py-4 pl-5 hover:border-white'>ABOUT</li></Link>
                <Link to='/Contact'><li className='text-lg font-semibold tracking-[2px] hover:border-y-2 py-4 pl-5 hover:border-white'>CUSTOMER SUPPORT</li></Link>
                <div className='mt-6'>
                    <div className='flex justify-center p-4  gap-12 border-t-2 border-white '>
                        <Link to='#'><FaFacebook className='text-4xl' /></Link>
                        <Link to='#'><FaInstagram className='text-4xl  ' /></Link>
                        <Link to='#'><FaTwitter className='text-4xl ' /></Link>
                    </div>
                    <div className='flex justify-center p-4 gap-12 border-b-2 border-white'>
                        <Link to='#'><FaPinterest className='text-4xl ' /></Link>
                        <Link to='#'><FaSnapchat className='text-4xl ' /></Link>
                        <Link to='#'><FaYoutube className='text-4xl  ' /></Link>
                    </div>
                </div>
            </ul>



        </>

    )
}

export default Navbar