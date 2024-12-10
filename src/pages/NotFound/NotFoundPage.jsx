import React from 'react';

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.notFound}>
            <h1>Not Found</h1>
          </div>
        </div>
      </div>
      <div className="pageBg"></div>
    </div>
  );
};

export default NotFoundPage;
