import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';
<<<<<<< HEAD
// import Footer from '../Components/Footer/Footer';
=======
>>>>>>> 3cc045246458b84764099f5d03300eeda6aac7eb

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
      const contextValue = { all_product };

<<<<<<< HEAD

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
=======
      return (
            <ShopContext.Provider value={contextValue}>

                  {props.children}

            </ShopContext.Provider>

      )
}
export default ShopContextProvider;


>>>>>>> 3cc045246458b84764099f5d03300eeda6aac7eb
