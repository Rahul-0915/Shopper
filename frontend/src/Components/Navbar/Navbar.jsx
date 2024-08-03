
import React, { useContext, useState } from 'react';
import './Navbar.css';
// import logonew2 from '../Assets/logonew2.png';
// import logo from '../Assets/logo.png';
import logo from '../Assets/bag_logo.png';
import cart3 from '../Assets/cart3.png';

import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

export default function Navbar() {

  // use for status line in current or active page {red line}
  const [menu, setmenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);


  return (
  

    // main navbar div..
    <div className="main-box">
    <div className='navbar'>

      {/* use for logo and name */}
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="" /></Link>
        <Link className='links' to="/"><p>Shopstar</p></Link>
      </div>
      <input type="search" name="" id="" placeholder= '   Search here..' className='search-bar' />
      {/*    */}
      {/* that red line for activepage use onclick () and ternary operater ,and link use to route topic  */}
      {/* <ul className='nav-menu'>
        <li onClick={() => { setmenu("Shop") }}><Link className='links' to="/">Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Men") }}><Link className='links' to="/Mens">Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Women") }}><Link className='links' to="/Womens">Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Kids") }}><Link className='links' to="/Kids">Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul> */}
 
      {/* use for login button and cart icon */}
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>

        <Link to='/Cart'>
          <img src={cart3} alt="" />
        </Link>

        {/*use for cart show O value  */}
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <br />
      <br />
    </div><hr />
    
    <div className="mini-nav">
    {/* use for menu itmes  */}
      {/* that red line for activepage use onclick () and ternary operater ,and link use to route topic  */}
      <ul className='nav-menu'>
        <li onClick={() => { setmenu("Shop") }}><Link className='links' to="/">Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Men") }}><Link className='links' to="/Mens">Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Women") }}><Link className='links' to="/Womens">Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => { setmenu("Kids") }}><Link className='links' to="/Kids">Kids</Link>{menu === "Kids" ? <hr /> : <></>}</li>
      </ul>
    </div>
    </div>
    


  )
}
