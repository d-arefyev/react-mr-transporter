import React, { useState } from "react";

import Input from "../../components/Input/Input";
import InputDate from "../../components/InputDate/InputDate";
import CustomRadioButton from "../../components/Buttons/CustomRadioButton/CustomRadioButton";
import AccentButton from "../../components/Buttons/AccentButton/AccentButton";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "/image/main-bg-1.jpg";
import image2 from "/image/main-bg-2.jpg";
import image3 from "/image/main-bg-3.jpg";
import image4 from "/image/main-bg-4.jpg";
import image5 from "/image/main-bg-5.jpg";
// import mainBg from '/image/main-bg.jpg';

import styles from "./HomePage.module.scss";

function HomePage() {
  const [abholort, setAbholort] = useState("");
  const [lieferort, setLieferort] = useState("");
  const [wunschdatum, setWunschdatum] = useState("");
  const [transportType, setTransportType] = useState("Abschleppauftrag");
  const [formErrors, setFormErrors] = useState("");

  const images = [image1, image2, image3, image4, image5];

  const handleDateChange = (e) => {
    setWunschdatum(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!abholort || !lieferort || !wunschdatum) {
      setFormErrors("Bitte füllen Sie alle Felder aus!");
      return;
    }

    setFormErrors("");

    try {
      const response = await fetch("/api/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          abholort,
          lieferort,
          wunschdatum,
          transportType,
        }),
      });

      if (response.ok) {
        alert("Die Daten wurden erfolgreich gesendet!");
        setAbholort("");
        setLieferort("");
        setWunschdatum("");
        setTransportType("Abschleppauftrag");
      } else {
        const errorData = await response.json();
        setFormErrors(errorData.error || "Fehler beim Senden der Daten!");
      }
    } catch (error) {
      console.error("Verbindungsfehler:", error);
      setFormErrors("Verbindungsfehler zum Server!");
    }
  };

  return (
    <div className={styles.homePage}>
      <div className="container">
        <div className={styles.mainContent}>
          {/* Transportart auswählen */}
          <form onSubmit={handleSubmit} className={styles.transportForm}>
            <h3>Transportart auswählen</h3>

            <div className={styles.radioButtons}>
              <CustomRadioButton
                label="Abschleppauftrag"
                checked={transportType === "Abschleppauftrag"}
                onChange={() => setTransportType("Abschleppauftrag")}
                name="transportType"
              />
              <CustomRadioButton
                label="EXPRESS Autotransport"
                checked={transportType === "EXPRESS Autotransport"}
                onChange={() => setTransportType("EXPRESS Autotransport")}
                name="transportType"
              />
            </div>

            <div className={styles.inputGroup}>
              <Input
                type="text"
                label="Abholort"
                placeholder="z.B. Hannover"
                onChange={(e) => setAbholort(e.target.value)}
                value={abholort}
                required
              />
              <Input
                type="text"
                label="Lieferort"
                placeholder="z.B. Herford"
                onChange={(e) => setLieferort(e.target.value)}
                value={lieferort}
                required
              />
              <InputDate
                label="Wunschdatum"
                value={wunschdatum}
                onChange={handleDateChange}
                required
              />
            </div>
            <AccentButton
              label="Weiter"
              type="submit"
              className={styles.submitButton}
              disabled={false}
            />
          </form>

          {/* Services */}
          <div className={styles.services}>
            <div className={styles.service}>
              <img src="/icons/main-icon-1.svg" alt="Icon 1" />
              <div>
                <h3>Einfach und unkompliziert</h3>
                <p>
                  Autotransporte Online-Buchen mit persönlicher Beratung und
                  Betreuung
                </p>
              </div>
            </div>

            <div className={styles.service}>
              <img src="/icons/main-icon-2.svg" alt="Icon 2" />
              <div>
                <h3>EXPRESS Autotransport</h3>
                <p>Schnelle Lieferung innerhalb von 1 bis 2 Werktagen</p>
              </div>
            </div>

            <div className={styles.service}>
              <img src="/icons/main-icon-3.svg" alt="Icon 3" />
              <div>
                <h3>Die Fahrzeuge sind über den gesamten Transportweg
                  versichert
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel images={images} />
      {/* <div className={styles.mainBg} style={{ backgroundImage: `url(${mainBg})` }}></div> */}
    </div>
  );
}

export default HomePage;
