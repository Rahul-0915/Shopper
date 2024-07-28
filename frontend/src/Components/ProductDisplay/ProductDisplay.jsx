import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='ProductDisplay'>
            <div className="ProductDisplay-left">
                <div className="ProductDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="ProductDisplay-img">
                    <img className='ProductDisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>
                <div className="ProductDisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(4.9)</p>
                </div>
                <div className="PrdouctDisplay-right-prices">

                    <div className="ProductDisplay-right-price-old">
                        ₹{product.old_price}
                    </div>
                    <div className="ProductDisplay-right-price-new">
                        ₹{product.new_price}
                    </div>

                </div>

                {/* use for product description  */}

                <div className="ProductDisplay-right-description">
                    desc
                </div>
                <div className="ProductDisplay-right-size">
                    <h1>Select size</h1>
                    <div className="ProductDisplay-right-sizes">
                        <div className="">S</div>
                        <div className="">M</div>
                        <div className="">L</div>
                        <div className="">XL</div>
                        <div className="">XXL</div>
                    </div>
                </div>
                <div className="buttons">
                    <button>Add to card</button> <button>Buy Now</button>
                </div>

                <p className='ProductDisplay-right-category'><span>Category :</span> {product.category}</p>
                <p className='ProductDisplay-right-category'><span>#Tags :</span> modern , latest</p>
            </div>
        </div>

    )
}
export default ProductDisplay