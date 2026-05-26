import { Link } from 'react-router-dom';

import pastriesImg from '../images/pastry.jpg';
import drinksImg from '../images/drink.jpg';
import cakesImg from '../images/cakes.jpg';

function Menu() {
  return (
    <div className='menu-navigation'>
      <h1>Explore Our Menu</h1>

      <p>
        Fresh pastries, handcrafted drinks, and delicious cakes made daily.
      </p>

      <div className='menu-category-grid'>

        <Link to='/menu/pastries' className='menu-category-card'>
          <img src={pastriesImg} alt='Pastries' />

          <div className='menu-card-overlay'>
            <h2>Pastries</h2>
          </div>
        </Link>

        <Link to='/menu/drinks' className='menu-category-card'>
          <img src={drinksImg} alt='Drinks' />

          <div className='menu-card-overlay'>
            <h2>Drinks</h2>
          </div>
        </Link>

        <Link to='/menu/cakes' className='menu-category-card'>
          <img src={cakesImg} alt='Cakes' />

          <div className='menu-card-overlay'>
            <h2>Cakes</h2>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Menu;