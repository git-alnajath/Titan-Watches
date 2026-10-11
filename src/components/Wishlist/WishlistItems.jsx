import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WishlistItems.css";

export default function WishlistItems() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    return saved.map((item) => ({ ...item, addedToCart: false }));
  });

  // Sync wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  }, [wishlist]);

  // 🔄 Sync "addedToCart" with actual cart
  useEffect(() => {
    const updateWishlistCartStatus = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setWishlist((prev) =>
        prev.map((item) => ({
          ...item,
          addedToCart: !!cart.find((c) => c.id === item.id),
        }))
      );
    };

    updateWishlistCartStatus(); // initial sync
    window.addEventListener("cartUpdated", updateWishlistCartStatus);

    return () => {
      window.removeEventListener("cartUpdated", updateWishlistCartStatus);
    };
  }, []);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleRemove = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
  };

  return (
    <div className="wishlist-page container">
      <div className="wishlist-header">
        <h1 className="wishlist-title">My Wishlist</h1>
        <div className="wishlist-count">
          {wishlist.length} item{wishlist.length !== 1 ? "s" : ""}
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <i className="far fa-heart"></i>
          <p>Your wishlist is empty</p>
          <button className="continue-shopping" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((item) => (
            <div key={item.id} className="watch-card">
              <div className="watch-image">
                <img src={item.image} alt={item.name} />
                {item.badge && <div className="watch-badge">{item.badge}</div>}
              </div>
              <div className="watch-content">
                <h5 className="watch-brand">
                  {item.brand}
                  <span>{item.name}</span>
                </h5>
                <p className="watch-desc">{item.description}</p>
                <h4 className="watch-price">
                  ₹{item.price.toLocaleString("en-IN")}
                </h4>
                <div className="watch-actions">
                  {item.addedToCart ? (
                    <button
                      className="cart-btn"
                      style={{ background: "#28a745" }}
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="cart-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                  )}
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
