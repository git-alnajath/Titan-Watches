import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import Hero from "../components/Men/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import menWatches from "../data/menWatches";
import themes from "../themes";

export default function Men() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      {/* <Hero /> */}
      <ProductCard
        data={menWatches.map((w, i) => ({ ...w, id: `men-${i}` }))}
        theme={themes.men}
      />
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
