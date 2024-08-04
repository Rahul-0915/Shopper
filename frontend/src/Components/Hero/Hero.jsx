import React from 'react';
import './Hero.css';
import 'react-slideshow-image/dist/styles.css';
import {Fade} from 'react-slideshow-image';

const slideImages = [
      {
            url:'https://i.fbcd.co/products/resized/resized-750-500/dff0bca857016f16cdbeee90df63ca85a71d720995c927c584fc9642ad4bb49e.jpg',
      },
      {
            url:'https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-44.jpg',
      },
      {
            url:'https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg',
      },
      {
            url:'https://images.vexels.com/content/196481/preview/mega-sale-online-slider-template-3a56d9.png',
      },
      {
            url:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/83d70974403181.5c2e97fb1f91b.jpg',
      },
];
//  css style in this inline css
const divStyle = {
      display :'flex',
      alignItems:"center",
      justifyContent:'center',
      height:"600px",
      marginTop:"130px",
      backgroundSize:"cover"
}
const Hero = () => {
  return (
    <div className='slide-container'>
      <Fade>
            {slideImages.map((image,index)=>(
                  <div key={index}>
                        <div style={{...divStyle,backgroundImage:`url(${image.url})`}}></div>
                  </div>
            ))};
      </Fade>
    </div>
  )
}

export default Hero





// import React from 'react'
// import './Hero.css';
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_section2.png'

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//             <h2>NEW ARRIVALS ONLY</h2>
//             <div>
//                   <div className="hero-hand-icon">
//                         <p>new</p>
//                         <img src={hand_icon} alt="" />
//                   </div>
//                   <p>Collections</p>
//                   <p>For Everyone</p>
//             </div>
//             <div className="hero-latest-btn">
//                   <div>Latest Collection</div>
//                   <img src={arrow_icon} alt="" />
//             </div>
//       </div>
//       <div className="hero-right">
//             <img src={hero_image} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Hero
