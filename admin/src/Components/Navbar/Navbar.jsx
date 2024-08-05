import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.png';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='navbar-header'>
     <img src={navlogo} alt="" className='nav-logo' />
     <p className='shopstar'>Shopstar</p>
     <p className='admin-panel'>Admin Panel</p>
     </div>
    
     
      
       <img src={navProfile} alt="" className='nav-profile'/> 
    </div>
  )
}

export default Navbar
