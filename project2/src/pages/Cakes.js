import { Link } from 'react-router-dom';

import Card from '../components/Card';
import products from '../data/products';

function Cakes({ addToCart }) {
  const cakes = products.filter(
    item => item.category === 'cakes'
  );

  return (
    <div className='menu-page'>
        
      <Link to='/menu' className='back-button'>
        ← Back to Menu
      </Link>
      <h1>Fresh Cakes</h1>

      <div className='products-grid'>
        {cakes.map(product => (
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

export default Cakes;