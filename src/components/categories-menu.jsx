import React from "react";
import { Link } from "react-router-dom";
import "./categories-menu.css";

export default function CategoriesMenu() {
  return (
    <div className="categories-menu">
      <Link to="/" className="menu-link">
        Home
      </Link>
      <Link to="/Sales" className="menu-link">
        Sale
      </Link>
      <Link to="/Bestsellars" className="menu-link">
        Bestsellers
      </Link>
      <Link to="/AnalogWatches" className="menu-link">
        Analog Watches
      </Link>
      <Link to="/SmartWatches" className="menu-link">
        Smart Watches
      </Link>
      <Link to="/NewArrivals" className="menu-link">
        New Arrivals
      </Link>
      <Link to="/Men" className="menu-link">
        Men
      </Link>
      <Link to="/women" className="menu-link">
        Women
      </Link>
      <Link to="/PremiumWatches" className="menu-link">
        Premium Watches
      </Link>
    </div>
  );
}
