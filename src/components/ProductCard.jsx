// ProductCard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

export default function Productcard({ data, theme }) {
  // ✅ theme add panniten
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showWishlistNotification, setShowWishlistNotification] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      setCart(savedCart);
      setWishlist(savedWishlist);
    };
    loadData();

    window.addEventListener("cartUpdated", loadData);
    window.addEventListener("wishlistUpdated", loadData);

    return () => {
      window.removeEventListener("cartUpdated", loadData);
      window.removeEventListener("wishlistUpdated", loadData);
    };
  }, []);

  const handleCartClick = (watch) => {
    const exists = cart.find((item) => item.id === watch.id);
    if (exists) {
      navigate("/cart");
    } else {
      const updatedCart = [...cart, { ...watch, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartUpdated"));
      setShowCartNotification(true);
      setTimeout(() => setShowCartNotification(false), 2000);
    }
  };

  const toggleWishlist = (watch) => {
    const exists = wishlist.find((item) => item.id === watch.id);
    if (exists) {
      const updated = wishlist.filter((item) => item.id !== watch.id);
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      window.dispatchEvent(new Event("wishlistUpdated"));
    } else {
      const updated = [...wishlist, watch];
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      window.dispatchEvent(new Event("wishlistUpdated"));
      setShowWishlistNotification(true);
      setTimeout(() => setShowWishlistNotification(false), 2000);
    }
  };

  return (
    <section
      id="collection-grid"
      className="collection-grid"
      style={{ backgroundColor: theme?.bg || "white" }} // ✅ grid bg
    >
      {data.map((watch) => {
        const inCart = cart.find((item) => item.id === watch.id);
        const inWishlist = wishlist.find((item) => item.id === watch.id);

        return (
          <div
            key={watch.id}
            className="watch"
            style={{ backgroundColor: theme?.cardBg || "white" }} // ✅ card bg
          >
            <div className="watch-image">
              <img src={watch.image} alt={watch.name} />
              {watch.badge && (
                <div
                  className="watch-badge"
                  style={{
                    backgroundColor: theme?.badgeBg || "#e74c3c",
                    color: theme?.badgeColor || "white",
                  }}
                >
                  {watch.badge}
                </div>
              )}
              <div className="watch-buttons">
                <button
                  className={`watch-btn wishlist ${inWishlist ? "active" : ""}`}
                  onClick={() => toggleWishlist(watch)}
                >
                  <i
                    className={inWishlist ? "fas fa-heart" : "far fa-heart"}
                  ></i>
                </button>
                <button className="watch-btn zoom">
                  <i className="fas fa-search-plus"></i>
                </button>
              </div>
            </div>

            <div className="watch-content">
              <h5 className="watch-brand">
                {watch.brand} <span>{watch.name}</span>
              </h5>
              <p className="watch-desc">{watch.description}</p>
              <h4 className="watch-price">₹{watch.price}</h4>

              <div className="watch-actions">
                <button
                  className={`action-btn cart-btn ${inCart ? "active" : ""}`}
                  onClick={() => handleCartClick(watch)}
                  style={{
                    backgroundColor: inCart
                      ? theme?.cartActive || "#ff5252"
                      : theme?.btn || "white",
                    color: inCart
                      ? theme?.cartActiveText || "white"
                      : theme?.btnText || "black",
                  }}
                  onMouseOver={(e) =>
                    !inCart &&
                    (e.currentTarget.style.backgroundColor =
                      theme?.hover || "#ff6b6b")
                  }
                  onMouseOut={(e) =>
                    !inCart &&
                    (e.currentTarget.style.backgroundColor =
                      theme?.btn || "white")
                  }
                >
                  {inCart ? (
                    <>
                      <i className="fas fa-check"></i> Go to Cart
                    </>
                  ) : (
                    <>
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </>
                  )}
                </button>

                <button
                  className={`action-btn wishlist-btn ${
                    inWishlist ? "active" : ""
                  }`}
                  onClick={() => toggleWishlist(watch)}
                  style={{
                    backgroundColor: theme?.wishlistBtn || "#f8f9fa",
                    color: theme?.wishlistText || "#495057",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      theme?.wishlistHover || "#e9ecef")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      theme?.wishlistBtn || "#f8f9fa")
                  }
                >
                  <i
                    className={inWishlist ? "fas fa-heart" : "far fa-heart"}
                  ></i>{" "}
                  {inWishlist ? "Wishlisted" : "Wishlist"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
