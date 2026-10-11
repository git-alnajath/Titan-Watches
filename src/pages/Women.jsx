import React from "react";
import Navbar from "../components/navbar";
import CategoriesMenu from "../components/categories-menu";
import Hero from "../components/Women/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import womenWatches from "../data/womenWatches";
import themes from "../themes";

export default function Women() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <Hero /> {/* Hero */}
      <ProductCard
        data={womenWatches.map((w, i) => ({ ...w, id: `women-${i}` }))}
        theme={themes.women}
      />
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
