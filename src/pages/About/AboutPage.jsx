import React from 'react';

import pageBg from '/image/page-bg.jpg';

import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.AboutPage}>
      <div className="container">
        <div className={styles.AboutPageContent}></div>
        <h1>About</h1>
      </div>
      <div className={styles.pageBg} style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default AboutPage;
