import React from 'react'


import newarrived from '../Images/Categorysec1/new_arrived.png'
import bestseller from '../Images/Categorysec1/best_seller.png'
import combo from '../Images/Categorysec1/combo.png'
import customdesign from '../Images/Categorysec1/customdesign.png'
import designoftheweek from '../Images/Categorysec1/design of the week.png'

import flatoff from '../Images/Categorysec1/flat_40_off.png'


const Categorysec1 = () => {
    return (
        <><div>
            <div className='flex px-56 py-10 cursor-pointer'>
                <div className='m-6 w-[20vw] h-fit '>
                    <img className='border-2 border-black' src={newarrived} alt="" />
                    <h1 className='text-lg font-semibold text-center mt-2'>New Arrivals</h1>
                </div>
                <div className='m-6 w-[20vw] h-fit '>
                    <img className='border-2 border-black' src={bestseller} alt="" />
                    <h1 className='text-lg font-semibold text-center mt-2'>Best Seller</h1>
                </div>
                <div className='m-6 w-[20vw] h-fit '>
                    <img className='border-2 border-black' src={combo} alt="" />
                    <h1 className='text-lg font-semibold text-center mt-2'>Combo</h1>
                </div>
                <div className='m-6 w-[20vw] h-fit '>
                    <img className='border-2 border-black' src={customdesign} alt="" />
                    <h1 className='text-lg font-semibold text-center mt-2'>Custom Design</h1>
                </div>
                <div className='m-6 w-[20vw] h-fit '>
                    <img className='border-2 border-black' src={designoftheweek} alt="" />
                    <h1 className='text-lg font-semibold text-center mt-2'>Design of the Week</h1>
                </div>
            </div>
            <div className='w-full'>
                <img className='w-full ' src={flatoff} alt="" />
            </div>
        </div>
        </>
    )
}

export default Categorysec1