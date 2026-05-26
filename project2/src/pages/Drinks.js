import { Link } from 'react-router-dom';

import Card from '../components/Card';
import products from '../data/products';

function Drinks({ addToCart }) {
  const drinks = products.filter(
    item => item.category === 'drinks'
  );

  return (
    <div className='menu-page'>
        
      <Link to='/menu' className='back-button'>
        ← Back to Menu
      </Link>

      <h1>Signature Drinks</h1>

      <div className='products-grid'>
        {drinks.map(product => (
          <Card
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Drinks;