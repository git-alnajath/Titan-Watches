import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import BsBanner from "../components/Bestsellars/BsBanner";
import Hero from "../components/Bestsellars/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import bsWatches from "../data/menWatches";
import themes from "../themes";

export default function Bestsellars() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <BsBanner /> {/* Bestsellars Banner */}
      {/* <Hero />  */}
      <ProductCard
        data={bsWatches.map((w, i) => ({ ...w, id: `Bs-${i}` }))}
        theme={themes.bestsellars}
      />{" "}
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
