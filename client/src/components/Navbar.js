import React from 'react';
import { logo } from '../assets';
import '../css/navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={logo} alt='Logo' /> 
      </div>
      <div className='NavbarText'>
        Book Store
      </div>
      <div className='NavLinks'>
        <a href='#'>Home</a>
        <a href='#'>Login</a>
        <a href='#'>Register</a>
      </div>
    </div>
  );
}

export default Navbar;
