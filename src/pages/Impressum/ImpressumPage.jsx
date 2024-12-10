import React from "react";

import pageBg from '/image/page-bg.jpg';

import styles from "./ImpressumPage.module.scss";

const ImpressumPage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="pageContent">
          <div className={styles.impressum}>
            <h1>Impressum</h1>
            <article>
              <p>
                <b>Mr. Transporter ist ein Unternehmen von Intermobil.de</b>
              </p>
              <p>
                <b>Geschäftsinhaber:</b> Willi Erdmann<br />
                <address>
                  Vorm Holzschlinge 63A<br />
                  D-32049 Herford
                </address>
              </p>
              <p>
                <b>Amtsgericht:</b> Herford<br />
                <b>Vertreten durch: </b> Willi Erdmann
              </p>
              <p>
                <b>Kontakt</b><br />
                Telefon: <a href="tel:+491725236558">+49(0)172-5236558</a><br />
                E-Mail: <a href="mailto:service@mrtransporter.de">service@mrtransporter.de</a>
              </p>
              <p>
                <b>Umsatzsteuer-ID</b><br />
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a<br />
                Umsatzsteuergesetz: DE214387793
              </p>
              <p>
                <b>Redaktionell verantwortlich</b><br />
                Willi Erdmann
              </p>
              <p>
                <b>EU-Streitschlichtung</b>
              </p>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)<br />
                bereit:&nbsp;
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p>
                <b>Verbraucherstreitbeilegung/Universalschlichtungsstelle</b>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </article>
          </div>


        </div>
      </div>
      <div className="pageBg" style={{ backgroundImage: `url(${pageBg})` }}></div>
    </div>
  );
};

export default ImpressumPage;

