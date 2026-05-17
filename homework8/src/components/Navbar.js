import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>Shopping Cart</h2>

      <div>
        <Link to="/">Products</Link>
        <Link to="/cart">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;