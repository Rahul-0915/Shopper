import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import { useState } from 'react';
import { useEffect } from 'react';
const RelatedProducts = () => {
    const [relatedProducts,setRelatedProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/relatedproducts')
        .then((response)=>response.json())
  .then((data)=>setRelatedProducts(data));
},[])

   
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="realatedproducts-item">
                {relatedProducts.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts