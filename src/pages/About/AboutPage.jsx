import React from 'react';

import aboutMap from '/image/about-map.png';
import checkIcon from '/icons/check-icon.svg';

import styles from "./AboutPage.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.pageContent}>
          <img src={aboutMap} alt="Mr-Transporter Map" className={styles.aboutMap} />
          <div>
          <h1>Über uns</h1>
            <ul className={styles.aboutlist}>
              <li className={styles.aboutlistItem}>
                <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
                <span>Mr. Transporter bietet Ihnen professionellen Express-Autotransport und Abschleppdienst, also direkt Transport ohne Umladung an.</span>
              </li>
              <li className={styles.aboutlistItem}>
                <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
                <span>Unser Service richtet sich an Privat- und Gewerbekunden!</span>
              </li>
              <li className={styles.aboutlistItem}>
                <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
                <span>Einfach, schnell und unkompliziert Onlinebuchen und mit paar Klicks, wird das gewünschte Fahrzeug innerhalb von 24 Stunden geliefert!</span>
              </li>
              <li className={styles.aboutlistItem}>
                <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
                <span>Beim Abschleppauftrag wird der Abschleppvorgang sofort erledigt!
                Wir transportieren Neu- und Gebrauchtfahrzeuge, Oldtimer und Unfallfahrzeuge.</span>
              </li>
              <li className={styles.aboutlistItem}>
                <img src={checkIcon} alt="Check Icon" className={styles.checkIcon} />
                <span>* Die Fahrzeuge sind über den gesamten Transportweg versichert.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pageBg"></div>
    </div>
  );
};

export default AboutPage;
