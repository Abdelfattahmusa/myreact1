import React from 'react';
import logo from './logo.png'
import toogle from './toogle.png'
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
return(

 <nav id='sticky'>
  <div className='nav-center'>
  <div className='nav-header'>
    <img src={logo} alt='logo' className='imglogo'/>
    <button className='nav-toggle'   data-toggle='collapse' formTarget='#lonec' type='button' data-target='#lonec'    onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      <img src={toogle} alt='toogle' className='imgtoogle'/>
    </button>
  </div>
  <div
        className={
          isNavExpanded ? "navigation-menu" : "navigation-menuactiv"
        }
      >
    <ul className='link'>
      <li>
        <a href='.nav-center'>الرئيسية</a>
      </li>
      <li>
        <a href='#row2'>الوجبات</a>
      </li>
      <li>
        <a href='#lon'>الطلبات</a>
      </li>
      <li>
        <a href='#con7'>للتواصل</a>
      </li>
    </ul>
  </div>
  </div>
 </nav> 
)
  
};

export default Navbar;
