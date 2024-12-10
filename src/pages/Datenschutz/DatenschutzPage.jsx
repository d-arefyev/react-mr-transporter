import React from 'react';
import pageBg from '/image/page-bg.jpg';

import styles from "./DatenschutzPage.module.scss";

const DatenschutzPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.AGBForm}>
            <h1>Datenschutz</h1>
          </div>
        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default DatenschutzPage;