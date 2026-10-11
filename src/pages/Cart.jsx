import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CartItems from "../components/Cart/CartItems";
import Footer from "../components/footer";

export default function Cart() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CartItems /> {/* Cart Items */}
      <Footer /> {/* Footer */}
    </>
  );
}
