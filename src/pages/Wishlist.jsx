import React from "react";
import Navbar from "../components/navbar";
import CategoriesMenu from "../components/categories-menu";
import WishlistItems from "../components/Wishlist/WishlistItems";
import Footer from "../components/footer";

export default function Wishlist() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <WishlistItems /> {/* Wishlist Items} */}
      <Footer /> {/* Footer */}
    </>
  );
}
