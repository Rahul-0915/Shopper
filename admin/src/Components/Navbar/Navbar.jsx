import React from 'react';
import './Navbar.css';
import navlogo from '../../assets/nav-logo.png';
import navProfile from '../../assets/nav-profile.png';
import drop_down from '../../assets/drop_down.png';

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className='navbar-header'>
     <img src={navlogo} alt="" className='nav-logo' />
     <p className='shopstar'>Shopstar</p>
     <p className='admin-panel'>Admin Panel</p>
     </div>
    

      <div className='profile'>
       <img src={navProfile} alt="" className='nav-profile'/> 
       <img src={drop_down} alt="" className='drop'/>
       </div>
    </div>
  )
}

export default Navbar
