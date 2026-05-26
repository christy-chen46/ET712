import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/kumo.jpg';

function Navbar({ cart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to='/' className='logo-section'>
        <img src={logo} alt='Kumo Kumo Logo' className='logo-img' />
        <h1 className='logo'>Kumo Kumo Café</h1>
      </Link>

      <div
        className='hamburger'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/menu'>Menu</Link>
        </li>

        <li>
          <Link to='/locations'>Locations</Link>
        </li>

        <li>
          <Link to='/cart'>Cart ({cart.length})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;