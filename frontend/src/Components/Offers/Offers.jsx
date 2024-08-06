import React from 'react';
import './Offers.css';
// import exclusive_image from '../Assets/hero_section.png';
import ex_offer from '../Assets/Ex_offer.png';

const Offers = () => 
{
  return (
    <div className="offerdiv">
      <img src={ex_offer} alt="" />
    </div>
  )
}
//   {
//   return (
//     <div className='offers'>
//       <div className="offers-left">
//             <h1>Exclusive</h1>
//             <h1>Offers For You</h1>
//             <p>ONLY ON BEST SELLERS PRODUCT</p>
//             <button>Check Now</button>
//       </div>
//       <div className="offers-right">
//             <img src={exclusive_image} alt="" />
//       </div>
//     </div>
//   )
// }

export default Offers
