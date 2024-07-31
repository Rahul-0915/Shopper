import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
 //cart context function
 const getDefaultCart = ()=>{
      let cart={};
      for (let index = 0; index < all_product.length+1; index++) {
           cart[index] = 0;
      }
      return cart;
}
const ShopContextProvider = (props) => {
       //useState variable
       const [cartItems,setCartItems] = useState(getDefaultCart());
      

      const addToCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
            console.log(cartItems);
      }
      const removeFromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
      }

      const contextValue = { all_product,cartItems ,addToCart,removeFromCart};



export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
      const contextValue = {all_product};

      return (

            <ShopContext.Provider value={contextValue}>
                  
                  {props.children}
                  
            </ShopContext.Provider>
            
      )
}
export default ShopContextProvider;

      return (
            <ShopContext.Provider value={contextValue}>

                  {props.children}

            </ShopContext.Provider>

      )
}
export default ShopContextProvider;



