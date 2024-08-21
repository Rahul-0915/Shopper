import React, { useContext } from 'react'
import '../BuyNow/BuyNow.css';
import { ShopContext } from '../../Context/ShopContext';

import {Link} from 'react-router-dom';
const BuyNow = (props) => {
      const { getTotalCartAmount} = useContext(ShopContext)
 
      
  return (
      <div className='buynowbox'>
      <h1 className='heading'>Checkout</h1>
      <div className='boxes'>
          <div className="info">
              <div className="address">
                  <p>1. Enter Delivery address</p>
                  <textarea name="" id="" placeholder='Click here..' required></textarea>
              </div>
              <p className='newtag'>2 Select a payment method</p>
              <div className="pyment">
                  * payment methods <br></br><br></br><hr />
                  Note :- Only Cash On Delivery Option Avilable Now.. <br /><br /><br />
                  <input type="radio" name="p" id="" disabled /> Credit and debit card <br></br><br></br>
                  <img src="https://t4.ftcdn.net/jpg/04/16/93/07/360_F_416930739_UeumuMO5QhZOXIAc09s7gz6JSPT97duS.jpg" alt="" width={400} height={200} /><br></br><br></br>
                  <input type="radio" name="p" id="" disabled /> Net banking <br></br><br></br>
                  <select name="bank" id="" disabled>
                      <option value="">Choose an option </option>
                      <option value="bob">Bank of baroda</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="sbi">Sbi Bank</option>
                      <option value="BOI">Bank of India</option>
                  </select>
                  <br /><br />
                  <input type="radio" name="p" id="" /> Cash on Delivery/Pay on Delivery<br></br><br></br>
                  <input type="radio" name="p" id="" disabled /> EMI <br></br><br></br>
              </div>
              <div className="offersnow">
                  <p>3. Offers</p>
                  <h4>50% off on MRP use Debit card</h4>
              </div>
          </div>
          <div className="totalinfo">

              <h2>Total Price</h2>
              <div className="pricebuy">
                  <p>Price</p>
                  <p>₹{getTotalCartAmount()} </p>
              </div> <br /><hr/>

              <div className="pricebuy">
                  <p>Delivery charge</p>
                  <p>Free</p>
              </div> <br /><hr/>
              <div className="pricebuy">
                  <h3>Total</h3>
                  <h3>₹{getTotalCartAmount()}</h3>
              </div> <br />
             <Link to='/FeedBack' className='feeds'><button >ORDER</button></Link> 
          </div>

      </div>
      <br /><br /><br />
  </div>
  )
}

export default BuyNow
