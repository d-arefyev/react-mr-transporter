import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import PickupPage from "./pages/Pickup/PickupPage";
import ContactPage from "./pages/Contact/ContactPage";
import AccountPage from "./pages/Account/AccountPage";

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
          </Routes>
          </main>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
