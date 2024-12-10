import React from 'react';

import styles from "./AccountPage.module.scss";

const AccountPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.accountForm}>
            <h1>Mein Konto</h1>
          </div>
        </div>
      </div>
      <div className="pageBg"></div>
    </div>
  );
};

export default AccountPage;
