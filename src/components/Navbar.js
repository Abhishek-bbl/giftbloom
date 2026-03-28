import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiBell, FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">🌸 Giftbloom</Link>
      </div>

      {/* Desktop Links */}
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
        <Link to="/customize" onClick={() => setMenuOpen(false)}>Customize</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </div>

      {/* Right Icons */}
      <div className="navbar-icons">
        <FiHeart className="nav-icon" title="Wishlist" />
        <FiShoppingCart className="nav-icon" title="Cart" />
        <FiBell className="nav-icon" title="Notifications" />
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
}

export default Navbar;