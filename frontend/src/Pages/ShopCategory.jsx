import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import Footer from '../Components/Footer/Footer';

//create props and give to the variable Shopcategory
const ShopCategory = (props) => {
      const {all_product} = useContext(ShopContext);
  return (
    //create one div shop category to add image banner and other data
    <div className='shop-category'>
      {/* banner image*/}
      <img  className='shopcategory-banner' src={props.banner} alt="" />
      {/*indexsort div */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        {/*dropdown image div and image */}
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      {/*shaopcategory-product map js function is use for filter item in this item.jsx file will be use */}
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category)
          {
            //item key value is use
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else
          {
            return null;
          }
        })}
      </div>
      {/*load more explore more div btn  */}
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      <Footer/>
    </div>

    
    
  );
  
  
};



export default ShopCategory
