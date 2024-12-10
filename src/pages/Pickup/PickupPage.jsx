import React from 'react';
import pageBg from '/image/page-bg.jpg';

import styles from "./PickupPage.module.scss";

const PickupPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.pickupForm}>
            <h1>Fahrzeug abholen</h1>
          </div>
        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default PickupPage;
