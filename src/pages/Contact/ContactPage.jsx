import React from 'react';
import pageBg from '/image/page-bg.jpg';

import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.contactForm}>
            <h1>Kontact</h1>
          </div>
        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default ContactPage;
