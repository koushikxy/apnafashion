import React from 'react'
import Topnav from '../components/Topnav'
import Navbar from '../components/Navbar'
import Bottomnav from '../components/Bottomnav'
import Headerslider from '../components/Headerslider'
import Categorysec1 from '../components/Categorysec1'
import Maincategory from '../components/Maincategory'
import Categorysec2 from '../components/Categorysec2'
import Maincategory2 from '../components/Maincategory2'
import Quotes from '../components/Quotes'

const Home = () => {
    return (
        <>
        <Topnav />
        <Navbar/>
        <Bottomnav/>
        <Headerslider/>
        <Categorysec1/>
        <Maincategory/>
        <Categorysec2/>
        <Maincategory2/>
        <Quotes/>
        </>
    )
}

export default Home