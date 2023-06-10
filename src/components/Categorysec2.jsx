import React from 'react'

import img1 from '../Images/Categorysec2/img1.png'
import img2 from '../Images/Categorysec2/img2.png'
import img3 from '../Images/Categorysec2/img3.png'
import img4 from '../Images/Categorysec2/img4.png'
import img5 from '../Images/Categorysec2/img5.png'


const Categorysec2 = () => {
    return (
        <>
            <div className='flex mt-20 mx-16'>
                <div className='m-2 w-[72vw]'>
                    <img src={img1} alt="" />
                </div>
                <div className='w-[35.2vw] m-2'>
                    <img className='mb-4' src={img2} alt="" />
                    <img className='' src={img3} alt="" />
                </div>
                <div className='w-[35.2vw] m-2'>
                    <img className='mb-4 border border-black' src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
        </>
    )
}

export default Categorysec2