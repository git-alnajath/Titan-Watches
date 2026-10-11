import React from "react";
import Navbar from "../components/navbar"; // Navbar import
import CategoriesMenu from "../components/categories-menu";
import SalesBanner from "../components/Sales/SalesBanner";
import Hero from "../components/Sales/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/footer";
import saleWatches from "../data/saleWatches";
import themes from "../themes";

export default function Sales() {
  return (
    <>
      <Navbar /> {/* Navbar render */}
      <CategoriesMenu /> {/* Catogories Menu */}
      <SalesBanner /> {/* Sales Banner */}
      {/* <Hero />  */}
      <ProductCard
        data={saleWatches.map((w, i) => ({ ...w, id: `sale-${i}` }))}
        theme={themes.sale}
      />
      {/* ProductCard */}
      <Footer /> {/* Footer */}
    </>
  );
}
