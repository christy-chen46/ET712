import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="product-image" />

      <h2>{props.name}</h2>

      <p className="price">${props.price}</p>

      <p className={props.inStock ? "stock in" : "stock out"}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;