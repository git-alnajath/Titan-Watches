import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";

import NewBanner from "../components/NewArrivals/NewBanner";
import Hero from "../components/NewArrivals/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import newArrivals from "../data/newArrivals";
import themes from "../themes";

export default function NewArrivals() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <NewBanner />
      {/* <Hero /> */}
      <ProductCard
        data={newArrivals.map((w, i) => ({ ...w, id: `new-${i}` }))}
        theme={themes.newArrivals}
      />
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
