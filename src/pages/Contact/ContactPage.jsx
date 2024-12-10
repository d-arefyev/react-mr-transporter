import React from 'react';

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
      <div className="pageBg"></div>
    </div>
  );
};

export default ContactPage;
