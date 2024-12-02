import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import mainLogo from '../../assets/icons/main-logo.svg';
import cartIcon from '../../assets/icons/cart.svg';
import LoginButton from '../Buttons/LoginButton/LoginButton';

import styles from './Header.module.scss';

const Header = ({ cartItems = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 5);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className={styles.headerContent}>
          {/* Логотип */}
          <Link to="/">
            <img src={mainLogo} alt="MR.TRANSPORTER" className={styles.mainLogo} />
          </Link>

          <div className={styles.headerRight}>
            {/* Навигация */}
            <nav className={styles.navBlock}>
              <ul>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  >
                    Über uns
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pickup"
                    className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  >
                    Fahrzeug abholen
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  >
                    Kontakt
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/account"
                    className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  >
                    Mein Konto
                  </NavLink>
                </li>
              </ul>
            </nav>

            <LoginButton onClick />

            {/* Корзина */}
            <NavLink to="/cart" className={styles.cartIcon}>
              <img src={cartIcon} alt="Cart" />
              {cartItemsCount > 0 && (
                <span className={styles.cartBadge}>{cartItemsCount}</span>
              )}
            </NavLink>

            {/* Кнопка бургер для мобильного меню */}
            {isMobile && !isMenuOpen && (
              <button className={styles.burgerButton} onClick={handleMenuToggle}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M3.19995 6.39999H28.8" stroke="#747270" strokeWidth="2.3" strokeLinecap="round" />
                  <path d="M3.19995 16H28.8" stroke="#747270" strokeWidth="2.3" strokeLinecap="round" />
                  <path d="M3.19995 25.6H28.8" stroke="#747270" strokeWidth="2.3" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Кнопка закрытия меню для мобильного устройства */}
      {isMobile && isMenuOpen && (
        <button className={styles.closeButton} onClick={handleMenuToggle}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M3.19995 28.8L28.7999 3.20001" stroke="#747270" strokeWidth="2.3" strokeLinecap="round" />
            <path d="M28.8 28.8L3.20005 3.20001" stroke="#747270" strokeWidth="2.3" strokeLinecap="round" />
          </svg>
        </button>
      )}

      {/* Мобильное меню */}
      {isMobile && isMenuOpen && (
        <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.visible : ''}`}>
          <div className={styles.mobileMenuBody}>
            <ul className={styles.mobileMenuList}>
              <li className={styles.mobileMenuItem}>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  onClick={handleMenuToggle}
                >
                  Über uns
                </NavLink>
              </li>
              <li className={styles.mobileMenuItem}>
                <NavLink
                  to="/pickup"
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  onClick={handleMenuToggle}
                >
                  Fahrzeug abholen
                </NavLink>
              </li>
              <li className={styles.mobileMenuItem}>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  onClick={handleMenuToggle}
                >
                  Kontakt
                </NavLink>
              </li>
              <li className={styles.mobileMenuItem}>
                <NavLink
                  to="/account"
                  className={({ isActive }) => (isActive ? styles.activeLink : '')}
                  onClick={handleMenuToggle}
                >
                  Mein Konto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
