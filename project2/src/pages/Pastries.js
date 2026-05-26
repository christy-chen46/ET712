import { Link } from 'react-router-dom';

import Card from '../components/Card';
import products from '../data/products';

function Pastries({ addToCart }) {
  const pastries = products.filter(
    item => item.category === 'pastries'
  );

  return (
    <div className='menu-page'>

      <Link to='/menu' className='back-button'>
        ← Back to Menu
      </Link>

      <h1>Fresh Pastries</h1>

      <div className='products-grid'>
        {pastries.map(product => (
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

export default Pastries;