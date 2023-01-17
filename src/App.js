import React from 'react';
import './App.css';
import Home from './Pages/Home/Home.js';
import Product from './Pages/Product/Products.js';
import ProductDetail from './Pages/ProductDetail/ProductDetail.js';
import Cart from './Pages/Cart/Cart.js';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
