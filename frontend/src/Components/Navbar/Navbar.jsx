
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

  // use for status line in current or active page {red line}
  const [menu, setmenu] = useState("Shop")


  return (

    // main navbar div..
    <div className='navbar'>

      {/* use for logo and name */}
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="" /></Link>
       <Link className='links' to="/"><p> SHOPPER</p></Link>
      </div>

      {/* use for menu itmes  */}
      {/* that red line for activepage use onclick () and ternary operater ,and link use to route topic  */}
      <ul className='nav-menu'>
        <li onClick={() => { setmenu("Shop") }}><Link className='links' to="/">Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Men") }}><Link className='links'  to="/Mens">Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Women") }}><Link className='links'  to="/Womens">Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Kids") }}><Link className='links'  to="/Kids">Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>

      {/* use for login button and cart icon */}
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>

        <Link to='/Cart'>
          <img src={cart_icon} alt="" />
        </Link>

        {/*use for cart show O value  */}
        <div className="nav-cart-count">0</div>
      </div>
      <br />
      <br />
    </div>
    
  )
}
