import React from "react";
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Offer from './pages/Offer'
import Fanbook from './pages/Fanbook'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Offer" element={<Offer />} />
        <Route exact path="/Fanbook" element={<Fanbook />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
