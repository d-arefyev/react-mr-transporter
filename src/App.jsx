import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SOSchat from "./components/SOSchat/SOSchat";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import PickupPage from "./pages/Pickup/PickupPage";
import ContactPage from "./pages/Contact/ContactPage";
import AccountPage from "./pages/Account/AccountPage";
import ImpressumPage from "./pages/Impressum/ImpressumPage";
import FAQPage from "./pages/FAQ/FAQPage";
import AGBPage from "./pages/AGB/AGBPage";
import CookiesPage from "./pages/Cookies/CookiesPage";
import DatenschutzPage from "./pages/Datenschutz/DatenschutzPage";
import CartPage from "./pages/Cart/CartPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";


import styles from './styles/App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.appContainer}>
      <BrowserRouter>
        <Header />
        <main className={styles.appContent}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="pickup" element={<PickupPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="impressum" element={<ImpressumPage />} />
            <Route path="FAQ" element={<FAQPage />} />
            <Route path="AGB" element={<AGBPage />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="datenschutz" element={<DatenschutzPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </main>
        <Footer />
      <SOSchat />
      </BrowserRouter>
    </div >
  );
}

export default App;
