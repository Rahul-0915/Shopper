import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';


const CartItems = () => {
      const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)

      return (
            <div className='cartitmes'>
                  <div className="cartitems-format-main">
                        <p className='ptag' >Products</p>
                        <p className='ptag' >Title</p>
                        <p className='ptag' >Price</p>
                        <p className='ptag' >Quantity</p>
                        <p className='ptag' >Total</p>
                        <p className='ptag' >Remove</p>
                  </div>
                  <hr />
                  {all_product.map((e) => {

                        if (cartItems[e.id] > 0) {
                              return <div>
                                    <div className="cartitems-format cartitems-format-main">
                                          <img src={e.image} alt="" className='carticon-product-icon' />
                                          <p>{e.name}</p>
                                          <p>₹{e.new_price}</p>
                                          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                          <p>₹{e.new_price * cartItems[e.id]}</p>
                                          <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                                    </div>
                                    <hr />
                              </div>
                        }
                        return null;
                  })}

                  
                  <div className="cartitems-down">
                  <div className="cartitems-promocode">
                              <p>If You Have a Prome Code , Enter it Here</p>
                              <div className="cartitems-promobox">
                                    <input type="text" placeholder='promo Code' />
                                    <button>SUBMIT</button>
                              </div>
                        </div>
                        <div className="cartitems-total">
                              <h1>Cart Total</h1>
                              <div>
                                    <div className="cartitems-total-item">
                                          <p>Subtotal</p>
                                          <p>₹{getTotalCartAmount()}</p>
                                    </div>
                                    <hr />
                                    <div className="cartitems-total-item">
                                          <p>Shipping Fee</p>
                                          <p>Free</p>
                                    </div>
                                    <hr />
                                    <div className="cartitems-total-item">
                                          <h3>Total</h3>
                                          <h3>₹{getTotalCartAmount()}</h3>
                                    </div>
                              </div>
                              {/* <Link to={`/buynow/${product.id}`} className='linkid'>
                    <button onClick={()=>{buyNow(product.id)}}>PROCEED TO CHECKOUT</button>
                    </Link> */}
                            <Link to='/buynow'><button>PROCEED TO CHECKOUT</button></Link> 
                        </div>
                        
                  </div>

            </div>
      

      )
}

export default CartItems
