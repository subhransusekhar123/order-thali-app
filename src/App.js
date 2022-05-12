import React from "react";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Items/>} />
        <Route path="/cart" element={<Cart/>} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
