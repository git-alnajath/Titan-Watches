import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import Hero from "../components/SmartWatches/Hero";
import SmartBanner from "../components/SmartWatches/smartBanner";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import smartWatches from "../data/smartWatches";
import themes from "../themes";

export default function SmartWatches() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <SmartBanner /> {/* Banner Carousel */}
      {/* <Hero /> */}
      <ProductCard
        data={smartWatches.map((w, i) => ({ ...w, id: `smart-${i}` }))}
        theme={themes.smartWatches}
      />{" "}
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
