
import './navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        {/* Brand Logo */}
        <a href="#" className="nav-logo">Amazon</a>
  
        {/* Search Bar - A key part of the Amazon look */}
        <div className="nav-search">
          <input type="text" placeholder="Search Amazon" />
          <button>🔍</button>
        </div>
  
        {/* Navigation Links */}
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>
    );
  }
  
  export default Navbar;