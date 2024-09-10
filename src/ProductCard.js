import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card" style={{height:'550px'}}>
      <img src={product.image} className="card-img-top" alt={product.name} style={{height:'400px'}} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <a href="/" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  );
};

export default ProductCard;
