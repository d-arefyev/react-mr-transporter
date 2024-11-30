import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                  <Link to="/about">Über uns</Link>
                </li>
                <li>
                  <Link to="/pickup">Fahrzeug abholen</Link>
                </li>
                <li>
                  <Link to="/contact">Kontakt</Link>
                </li>
                <li>
                  <Link to="/account">Mein Konto</Link>
                </li>
              </ul>
            </nav>
            
            <LoginButton onClick />
            {/* <LoginButton onClick={() => alert("Button clicked!")} /> */}

            {/* Корзина */}
            <Link to="/cart" className={styles.cartIcon}>
              <img src={cartIcon} alt="Cart" />
              {cartItemsCount > 0 && (
                <span className={styles.cartBadge}>{cartItemsCount}</span>
              )}
            </Link>

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
                <Link to="/about" className={styles.navLink} onClick={handleMenuToggle}>Über uns</Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link to="/pickup" className={styles.navLink} onClick={handleMenuToggle}>Fahrzeug abholen</Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link to="/contact" className={styles.navLink} onClick={handleMenuToggle}>Kontakt</Link>
              </li>
              <li className={styles.mobileMenuItem}>
                <Link to="/account" className={styles.navLink} onClick={handleMenuToggle}>Mein Konto</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;









// import React, { useState, useEffect } from 'react';
// // import { useSelector } from 'react-redux';
// import { Link } from "react-router-dom";

// import mainLogo from "../../assets/icons/main-logo.svg";
// import cartIcon from "../../assets/icons/cart.svg";
// import LoginButton from "../Buttons/LoginButton/LoginButton";

// import styles from "./Header.module.scss";

// const Header = ({ cartItems = [] }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); 
//   // const cartItems = useSelector((state) => state.cart.items);
//   const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 5);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 767);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleSubmit = () => {
//     alert("Button clicked!");
//   };

//   return (
//     <header>
//       <div className="container">
//         <div className={styles.headerContent}>
//           {/* Логотип */}
//           <Link to="/">
//             <img src={mainLogo} alt="MR.TRANSPORTER" className={styles.mainLogo} />
//           </Link>

//           <div className={styles.headerRight}>
//             {/* Навигация */}
//             <nav className={styles.navBlock}>
//               <ul>
//                 <li>
//                   <Link to="/about">Über uns</Link>
//                 </li>
//                 <li>
//                   <Link to="/pickup">Fahrzeug abholen</Link>
//                 </li>
//                 <li>
//                   <Link to="/contact">Kontakt</Link>
//                 </li>
//                 <li>
//                   <Link to="/account">Mein Konto</Link>
//                 </li>
//               </ul>
//             </nav>
            
//             <LoginButton
//               // onClick={() => console.log("Login clicked")} 
//               onClick
//             />

//             {/* Корзина */}
//             <Link to="/cart" className={styles.cartIcon}>
//               <img src={cartIcon} alt="Cart" />
//               {cartItemsCount > 0 && (
//                 <span className={styles.cartBadge}>{cartItemsCount}</span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>

//       {isMobile && (
//         <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.visible : ''}`}>
//           <button className={styles.closeButton} onClick={handleMenuToggle}>
//             <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M34 2L2 34" stroke="none" strokeWidth="3.67" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M2 2L34 34" stroke="none" strokeWidth="3.67" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//           <div className={styles.mobileMenuBody}>
//             <ul className={styles.mobileMenuList}>
//               <li className={styles.mobileMenuItem}>
//                 <Link to="/about" className={styles.navLink} onClick={handleMenuToggle}>Über uns</Link>
//               </li>
//               <li className={styles.mobileMenuItem}>
//                 <Link to="/pickup" className={styles.navLink} onClick={handleMenuToggle}>Fahrzeug abholen</Link>
//               </li>
//               <li className={styles.mobileMenuItem}>
//                 <Link to="/contact" className={styles.navLink} onClick={handleMenuToggle}>Kontakt</Link>
//               </li>
//               <li className={styles.mobileMenuItem}>
//                 <Link to="/account" className={styles.navLink} onClick={handleMenuToggle}>Mein Konto</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
