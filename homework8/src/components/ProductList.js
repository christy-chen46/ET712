function ProductList({ products, addToCart, cart }) {
  return (
    <div className="container">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => {
          const alreadyAdded = cart.some(
            (item) => item.id === product.id
          );

          return (
            <div className="card" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <h3>{product.name}</h3>

              <p>${product.price.toFixed(2)}</p>

              <button
                disabled={alreadyAdded}
                onClick={() => addToCart(product)}
              >
                {alreadyAdded ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;