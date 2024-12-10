import React from 'react';
import pageBg from '/image/page-bg.jpg';

import styles from "./CookiesPage.module.scss";

const CookiesPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.AGBForm}>
            <h1>Cookies</h1>
          </div>
        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default CookiesPage;
