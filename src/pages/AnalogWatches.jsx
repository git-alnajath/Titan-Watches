import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import Hero from "../components/AnalogWatches/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import analogWatches from "../data/analogWatches";
import themes from "../themes";

export default function AnalogWatches() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      {/* <Hero />  */}
      <ProductCard
        data={analogWatches.map((w, i) => ({ ...w, id: `analog-${i}` }))}
        theme={themes.analogWatches}
      />
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
