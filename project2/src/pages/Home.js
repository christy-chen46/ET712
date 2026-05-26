import { Link } from 'react-router-dom';
import heroImage from '../images/cafe.jpg';

function Home() {
  return (
    <div
      className='hero'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='hero-overlay'>
        <h1>Welcome to Kumo Kumo Cafe</h1>

        <p>
          fresh pastries, refreshing drinks, and cozy café vibes.
        </p>

        <Link to='/menu'>
          <button className='hero-btn'>
            Order Online
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;