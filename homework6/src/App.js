import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";
import onigiri from "./images/giri.jpg";
import dango from "./images/dan.jpg";
import dumpling from "./images/dump.jpg";
import melonbread from "./images/melon.jpg";
import strawberrymilk from "./images/milk.jpg";
import ramune from "./images/mune.jpg";
import pudding from "./images/pud.jpg";
import salmonnigiri from "./images/salmon.jpg";
import fruitsandwich from "./images/wich.jpg";
import taiyaki from "./images/yaki.jpg";

function App() {
  const products = [
    {
      id: 1,
      name: "Onigiri",
      image: onigiri,
      price: 2.99,
      inStock: true,
    },
    {
      id: 2,
      name: "Dango",
      image: dango,
      price: 1.99,
      inStock: true,
    },
    {
      id: 3,
      name: "Dumplings",
      image: dumpling,
      price: 4.99,
      inStock: false,
    },
    {
      id: 4,
      name: "Melon Bread",
      image: melonbread,
      price: "1.50",
      inStock: true,
    },
    {
      id: 5,
      name: "Strawberry Milk",
      image: strawberrymilk,
      price: "0.99",
      inStock: true,
    },
    {
      id: 6,
      name: "Ramune",
      image: ramune,
      price: "0.99",
      inStock: false,
    },
    {
      id: 7,
      name: "Pudding",
      image: pudding,
      price: 1.99,
      inStock: true,
    },
    {
      id: 8,
      name: "Salmon Nigiris",
      image: salmonnigiri,
      price: 5.99,
      inStock: true,
    },
    {
      id: 9,
      name: "Fruit Sandwich",
      image: fruitsandwich,
      price: 1.99,
      inStock: false,
    },
    {
      id: 10,
      name: "Taiyaki",
      image: taiyaki,
      price: 2.99,
      inStock: true,
    },
  ];

  return (
    <div className="app">
      <h1 className="title">Japanese Convenience Store</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;