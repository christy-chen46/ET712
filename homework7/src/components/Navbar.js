import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>LOV</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/space">Shigaraki</Link>
        <Link to="/ocean">Dabi</Link>
      </div>
    </nav>
  );
}

export default Navbar;