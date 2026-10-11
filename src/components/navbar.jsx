import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import titanlogo from "../assets/Images/Watches/titan-logo.jpg";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  // ✅ Load initial cart count (with quantity sum)
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(count);
  }, []);

  // ✅ Listen for cart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(count);
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  return (
    <header className="navbar" id="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={titanlogo} alt="Titan Logo" className="logo-icon" />
        <span className="logo-text">TITAN</span>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <i className="fa fa-search search-icon"></i>
        <input type="text" placeholder="Search titan edge..." />
        <i className="fa fa-times close-icon"></i>
      </div>

      {/* Right Menu */}
      <nav className="menu">
        <Link className="icon-link" to="/Auth">
          <i className="fa-regular fa-user"></i>
          <span>Account</span>
        </Link>
        <Link className="icon-link" to="/Wishlist">
          <i className="fa-regular fa-heart"></i>
          <span>Wishlist</span>
        </Link>
        <Link className="icon-link" to="/Cart">
          <i className="fa-solid fa-bag-shopping cart-icon">
            <span className="cart-count">{cartCount}</span>
          </i>
          <span>Cart</span>
        </Link>
        <Link className="icon-link" to="/">
          <i className="fa-solid fa-box"></i>
          <span>Track Order</span>
        </Link>
      </nav>
    </header>
  );
}
