import React from 'react';
import Home from '../home/Home.js';
import About from '../about/About.js';
import Contact from '../contact/Contact.js';
import Profile from '../profile/Profile.js';
import {BrowserRouter, Routes, Route, MemoryRouter, Link, Navigate} from "react-router-dom";

function RouterComponent(){
    return(
    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Home/>}></Route>
        <Route path= "Profile" element={<Profile/>}></Route>
        <Route path= "About" element={<About/>}></Route>
        <Route path= "Contact" element={<Contact/>}></Route>
       {/* / <Route path='*' element={<div>alert not found!</div>}></Route> */}
        <Route path='*' element={<Navigate to= "/"/>}></Route>

    </Routes>
    </BrowserRouter>
        
    )
}

export default RouterComponent
