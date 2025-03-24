import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router";
import Header from "./Header/index.js";

// Importing Pages
import HomePage from './pages/home/index.js';
import AboutPage from "./pages/about/index.js";
import ShopCollectionPage from './pages/shopCollection/index.js';
import ContactPage from "./pages/contact/index.js";
import FAQPage from "./pages/FAQ/index.js";
import ProductRoutePage from './pages/product/index.js'

function App() {
  return (
    <div className="min-h-screen bg-palette1">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/shop-collection' element={<ShopCollectionPage />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/product/*' element={<ProductRoutePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
