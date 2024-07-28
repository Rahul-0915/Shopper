import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import Footer from '../Footer/Footer';

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" /> {product.name}
      <Footer/>
    </div>
  )
}

export default Breadcrum
