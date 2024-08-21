import React from 'react'
import './Update.css';
import { MdClose } from "react-icons/md";
import upload_area from '../../assets/upload_area.svg'
const Update = ({handleSubmit,handleOnChange,handleclose,rest}) => {
  return (
      
     <div className='edit-product'>
      <form onSubmit={handleSubmit}>
      <div className="close-btn" onClick={handleclose}>
       <MdClose/>
       </div>
       <div className="editproduct-itemfield">
                  <p>Product Title</p>
                  <input type="text" name='name' onChange={handleOnChange} value={rest.name} placeholder='Type Here'/>
            </div>
            <div className="editproduct-price">
                  <div className="editproduct-itemfield">
                        <p>Price</p>
                        <input type="text" name="old_price"  onChange={handleOnChange} placeholder='Type Here' id="" value={rest.old_price}  />
                  </div>
                  <div className="editproduct-itemfield">
                        <p>Offer Price</p>
                        <input type="text" name="new_price"   onChange={handleOnChange} placeholder='Type Here' id="" value={rest.new_price}  />
                  </div>
            </div>
            <div className="editproduct-itemfield">
                  <p>Product Category</p>
                  <select name="category"  className='edit-product-selector' value={rest.category} onChange={handleOnChange}>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                  </select>
            </div>
            <div className="editproduct-itemfield">
            <label htmlFor="file-input">
                        <img src={upload_area} alt="" className='editproduct-thumnail-img' />
                  </label>

            </div>
            <input type="file" name='image'  onChange={handleOnChange}  id='file-input'hidden/>
            <button className='editproduct-btn'>Edit</button>


      </form>
     </div>

  )
}

export default Update
