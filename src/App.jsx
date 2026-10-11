// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // ← important!

// import Auth from "./components/Auth";
// import Wishlist from "./pages/Wishlist";
// import Cart from "./pages/Cart";
// import Home from "./pages/Home";
// import Sales from "./pages/Sales";
// import Bestsellars from "./pages/Bestsellars";
// import AnalogWatches from "./pages/AnalogWatches";
// import NewArrivals from "./pages/NewArrivals";
// import SmartWatches from "./pages/SmartWatches";
// import Men from "./pages/Men";
// import Women from "./pages/Women";
// import PremiumWatches from "./pages/PremiumWatches";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Auth" element={<Auth />} />
//         <Route path="/Cart" element={<Cart />} />
//         <Route path="/Wishlist" element={<Wishlist />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/Sales" element={<Sales />} />
//         <Route path="/Bestsellars" element={<Bestsellars />} />
//         <Route path="/AnalogWatches" element={<AnalogWatches />} />
//         <Route path="/SmartWatches" element={<SmartWatches />} />
//         <Route path="/NewArrivals" element={<NewArrivals />} />
//         <Route path="/Men" element={<Men />} />
//         <Route path="/Women" element={<Women />} />
//         <Route path="/PremiumWatches" element={<PremiumWatches />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ← important!

import Auth from "./components/Auth";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Bestsellars from "./pages/Bestsellars";
import AnalogWatches from "./pages/AnalogWatches";
import NewArrivals from "./pages/NewArrivals";
import SmartWatches from "./pages/SmartWatches";
import Men from "./pages/Men";
import Women from "./pages/Women";
import PremiumWatches from "./pages/PremiumWatches";

export default function App() {
  return (
    <BrowserRouter basename="/Titan-Watches">
      <Routes>
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/" element={<Home />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Bestsellars" element={<Bestsellars />} />
        <Route path="/AnalogWatches" element={<AnalogWatches />} />
        <Route path="/SmartWatches" element={<SmartWatches />} />
        <Route path="/NewArrivals" element={<NewArrivals />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/PremiumWatches" element={<PremiumWatches />} />
      </Routes>
    </BrowserRouter>
  );
}