import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Fetching from "./fetching";
import SingleProduct from "./singleprod";
import Footer from "./footer";
import Navbar from "./navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Fetching apiUrl="https://fakestoreapi.com/products" />}
        />
        <Route
          path="electronics"
          element={
            <Fetching apiUrl="https://fakestoreapi.com/products/category/electronics" />
          }
        />
        <Route
          path="jewelery"
          element={
            <Fetching apiUrl="https://fakestoreapi.com/products/category/jewelery" />
          }
        />
        <Route
          path="mensclothing"
          element={
            <Fetching apiUrl="https://fakestoreapi.com/products/category/men's%20clothing" />
          }
        />
        <Route
          path="womensclothing"
          element={
            <Fetching apiUrl="https://fakestoreapi.com/products/category/women's%20clothing" />
          }
        />
        <Route path="viewproduct/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
