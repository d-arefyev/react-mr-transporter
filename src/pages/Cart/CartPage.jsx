import React from 'react';

import styles from "./CartPage.module.scss";

const CartPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.AGBForm}>
            <h1>Cart</h1>
          </div>
        </div>
      </div>
      <div className="pageBg"></div>
    </div>
  );
};

export default CartPage;
