import React from "react";
import '../App.css';
import strawberry from '../images/straw.jpg'
import blueberry from '../images/blue.jpg'
import banana from '../images/ban.jpg'

const products = [
  { id: 1, name: "Strawberry", price: 1 , was: 2.5, image: strawberry},
  { id: 2, name: "Blueberry", price: 1.5, was: 2.8, image: blueberry },
  { id: 3, name: "Banana", price: 3, was: 5.0, image: banana },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2 className="producttitle">Products</h2>
      <section className="cardcontainer">
        {products.map((product) => (
            <div key={product.id} className="card">
               <img src={product.image}/>
               <p className="productname">{product.name}{" "} 
               <s>{product.was}/lb</s>{" "} 
               <span>${product.price}</span>/lb 
               </p>
               <button className="btn_addcart" onClick={() => 
addToCart(product)}> Add to Cart
               </button>
            </div>
        ))}
      </section>
    </div>
  );
};

export default ProductList;
