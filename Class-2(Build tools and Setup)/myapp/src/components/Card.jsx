import React from 'react';
import './card.css';

function Card({productName , price , imageUrl}) {
  return (
    <div className="product-card">
      {/* Product Image Area */}
      <div className="image-placeholder">
        <img style={{height:'200px' , width:'200px'}} src={imageUrl}/>
      </div>

      {/* Product Info */}
      <h3 className="product-name">
        {productName}
      </h3>
      
      <div className="product-price">
        <span className="currency-symbol">$</span>
          {price}
      </div>

      <button className="add-button">Add to Cart</button>
    </div>
  );
}

export default Card;