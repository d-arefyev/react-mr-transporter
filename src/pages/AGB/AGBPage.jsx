import React from 'react';
import pageBg from '/image/page-bg.jpg';

import styles from "./AGBPage.module.scss";

const AGBPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.AGBForm}>
            <h1>AGB</h1>
          </div>
        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default AGBPage;
