import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';
import Update from '../Update/Update';
import axios from 'axios';

const ListProduct = () => {
  const [addSection,setAddSection] = useState(false)
  const [editSection,setEditSection] = useState(false)

  const handleSubmit =async (e)=>{
    e.preventDefault();
  }
  
  const [allproducts,setAllProducts] = useState([]);
  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }


    useEffect(()=>{
      fetchInfo();
    },[])
    //remove product
    const remove_product = async (id) =>{
      await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
      })
      await fetchInfo();
    }
    const[formData,setFormData] = useState({
      name:"",
      image:"",
      category:"women",
      new_price:"",
      old_price:""
    })
    const[formDataEdit,setFormDataEdit] = useState({
      _id:"",
      name:"",
      image:"",
      category:"women",
      new_price:"",
      old_price:""
    })

    const handleOnChange = (e) => {
      const { name, value, files } = e.target;
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    };
    
    const handleUpdate = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
    
      // Create a new FormData object to handle file uploads
      const formDataToSend = new FormData();
      
      // Append all form data fields to the FormData object
      Object.keys(formDataEdit).forEach((key) => {
        formDataToSend.append(key, formDataEdit[key]);
      });
    
      try {
        // Send the PUT request to update the product
        const response = await axios.put("http://localhost:4000/update", formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data', // Set content type to handle file uploads
          },
        });
    
        // Check if the update was successful
        if (response.data.success) {
          alert(response.data.message); // Show success message
    
          // Fetch the updated list of products
          fetchInfo(); 
    
          // Close the edit section
          setEditSection(false); 
        } else {
          alert('Failed to update product'); // Show failure message
        }
      } catch (error) {
        console.error('Error updating product:', error); // Log any errors
        alert('Error updating product'); // Show error message
      }
    };
    

    // const handleUpdate = async(product)=>{
    //   e.preventDefault()
    //   const data = await axios.put("http://localhost:4000/update",formDataEdit)
    //   alert("data Updated");
    //   if(data.data.success)
    //   {
       
    //     alert(data.data.message)

    //   }
    // }
    const handleEditOnChange = (e) => {
      const { name, value, files } = e.target;
      setFormDataEdit((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    };
    // const handleEditOnChange= async(e)=>{
    //   const { name, value } = e.target;
    //   setFormDataEdit((prev)=>{
    //     return{
    //       ...prev,
    //       [name]:value
    //     }
    //   })
    // }
    const handleEdit = (product) =>{
      setFormDataEdit(product)
      setEditSection(true)
    }
  return (
    <div className='list-product'>
      {
      addSection && (
        <Update
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        handleclose={()=>setAddSection(false)}
        rest={formData}
        />
      )
      }
      {
        editSection &&(
          <Update
        handleSubmit={handleUpdate}
        handleOnChange={handleEditOnChange}
        handleclose={()=>setEditSection(false)}
          rest={formDataEdit}
        />
        )
      }
   {/* <button className='list-product-btn' onClick={()=>setAddSection(true)}>All Product</button> */}
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Product Id</p>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
        <p>Edit</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />

      {allproducts[0]?(
      allproducts.map((product,index)=>{
        console.log(product)
        return <>
        
        <div key={index} className="listproduct-format-main listproduct-format">
          <p>{product.id}</p>
          <img src={product.image} alt="" className="listproduct-product-icon" />
          <p>{product.name}</p>
          <p>₹{product.old_price}</p>
          <p>₹{product.new_price}</p>
          <p>{product.category}</p>
          <img onClick={()=>{remove_product(product.id)}} className ="listproduct-remove-icon" src={cross_icon} alt="" />
      <button onClick={()=>handleEdit(product)}>Edit</button>
        </div>
        
        <hr />
        
        </>
        
      }))
    :(
      <p style={{textAlign:"Center"}}>No data In database</p>
    )}
      </div>
     
    </div>
   
  )
}

export default ListProduct
