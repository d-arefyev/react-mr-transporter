import React from 'react';
import pageBg from '/image/page-bg.jpg';

import styles from "./FAQPage.module.scss";

const FAQPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.FAQForm}>
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default FAQPage;
