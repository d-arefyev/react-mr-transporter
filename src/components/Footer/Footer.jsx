import React, { useState, } from 'react';
import { Link } from 'react-router-dom';

import footerLogo from '../../assets/icons/logo-gray.svg';
// import sendIcon from '../../assets/icons/send.svg';
import Input from "../Input/Input";
import AccentButton from "../Buttons/AccentButton/AccentButton";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formErrors, setFormErrors] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !isChecked) {
      setFormErrors("Bitte füllen Sie alle Felder aus!");
      return;
    }

    setFormErrors("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Erfolgreich abonniert!");
        setEmail("");
        setIsChecked(false);
      } else {
        setFormErrors("Fehler beim Abonnieren!");
      }
    } catch (error) {
      console.error("Netzwerkfehler:", error);
      setFormErrors("Verbindungsfehler zum Server!");
    }
  };

  return (
    <footer>
      <div className="container">
        <Link to="/">
          <img src={footerLogo} alt="MR.TRANSPORTER" className={styles.footerLogo} />
        </Link>

        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.section}>
              <h4>Adresse</h4>
              <address className={styles.text}>
                Vorm Holzschlinge 63A,
                <br />
                D-32049 Herford
                <br />
                Deutschland
              </address>
            </div>

            <div className={styles.section}>
              <h4>Menü</h4>
              <nav className={styles.nav}>
                {/* <Link to="/">Startseite</Link> */}
                <Link to="/about">Über uns</Link>
                <Link to="/pickup">Fahrzeug abholen</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/account">Mein Konto</Link>
                <Link to="/impressum">Impressum</Link>
                <Link to="/FAQ">FAQ</Link>
              </nav>
            </div>

            <div className={styles.section}>
              <h4>Richtlinien</h4>
              <nav className={styles.nav}>
                <Link to="/AGB">AGB</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/datenschutz">Datenschutz</Link>
              </nav>
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4>Newsletter abonnieren</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <Input
                  label="E-Mail-Adresse"
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="z.B. max.schmidt@gmail.com"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.newsletterButtons}>
                <AccentButton
                  label="Jetzt senden"
                  type="email"
                  // icon={<img src={sendIcon} alt="Send Icon" />}
                  icon={<svg width="29" height="18" viewBox="0 0 29 18" fill="none">
                    <path d="M25.59 0H7.32223C5.59106 0 4.18268 1.40839 4.18268 3.13955V7.67654H1.16947C0.672991 7.67654 0.270508 8.07908 0.270508 8.57555C0.270508 9.07203 0.672991 9.47452 1.16947 9.47452H4.18268V11.8882H2.6793C2.18282 11.8882 1.78034 12.2907 1.78034 12.7872C1.78034 13.2837 2.18282 13.6862 2.6793 13.6862H4.18262V14.8605C4.18262 16.5917 5.59101 18 7.32217 18H25.5899C27.3211 18 28.7295 16.5917 28.7295 14.8605V3.13961C28.7295 1.40844 27.3211 0 25.59 0ZM7.32223 1.79798H25.59C25.9088 1.79798 26.2018 1.90998 26.4323 2.09641L17.7071 8.49896C16.9706 9.03946 15.9416 9.03946 15.2051 8.49896L6.47991 2.09641C6.7103 1.90998 7.0034 1.79798 7.32223 1.79798ZM26.9316 14.8605C26.9316 15.6003 26.3298 16.2021 25.59 16.2021H7.32223C6.58246 16.2021 5.9806 15.6003 5.9806 14.8605V13.6862H9.36577C9.86225 13.6862 10.2647 13.2837 10.2647 12.7872C10.2647 12.2907 9.86225 11.8882 9.36577 11.8882H5.9806V3.96008L14.1414 9.94848C14.8229 10.4486 15.6394 10.6985 16.4561 10.6985C17.2725 10.6985 18.0893 10.4485 18.7707 9.94848L26.9315 3.96008L26.9316 14.8605Z" fill="white" />
                  </svg>
                  }
                  className={styles.button}
                  disabled={!isChecked}
                  iconPosition="right"
                />

                <div className={styles.soc1alIcons}>
                  <a href="https://web.whatsapp.com/" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M25.6289 4.38107C24.2451 2.9882 22.5987 1.88376 20.7851 1.13174C18.9714 0.379717 17.0266 -0.00494214 15.0632 4.79352e-05C6.83027 4.79352e-05 0.12812 6.70053 0.124792 14.9368C0.124792 17.5691 0.811978 20.1381 2.11813 22.4043L0 30.1431L7.91845 28.0649C10.1088 29.2572 12.5627 29.8824 15.0565 29.8835H15.0632C23.2945 29.8835 29.9966 23.183 29.9999 14.9468C30.0056 12.9842 29.6222 11.0399 28.872 9.22642C28.1217 7.41289 27.0194 5.76605 25.6289 4.38107ZM15.0632 27.3627H15.0582C12.8344 27.363 10.6516 26.7647 8.73875 25.6306L8.28617 25.3611L3.58735 26.594L4.84026 22.0133L4.54575 21.5441C3.30247 19.5648 2.64431 17.2742 2.64725 14.9368C2.65058 8.09155 8.21962 2.52251 15.0682 2.52251C16.6992 2.51888 18.3148 2.83878 19.8213 3.46369C21.3279 4.08859 22.6956 5.0061 23.8452 6.1631C25.001 7.31458 25.9171 8.68372 26.5405 10.1914C27.164 11.699 27.4824 13.3153 27.4775 14.9468C27.4742 21.792 21.9051 27.3627 15.0632 27.3627ZM21.8735 18.0632C21.4991 17.8752 19.6655 16.9734 19.3228 16.8486C18.9817 16.7238 18.7337 16.6622 18.4842 17.035C18.2346 17.4077 17.5191 18.2479 17.3011 18.4975C17.0832 18.7471 16.8652 18.777 16.4925 18.5907C16.1198 18.4043 14.9168 18.01 13.4908 16.7388C12.381 15.7488 11.6323 14.5275 11.4143 14.1531C11.1963 13.7787 11.391 13.5774 11.579 13.391C11.7471 13.2246 11.9517 12.9551 12.1381 12.7371C12.3244 12.5192 12.386 12.3644 12.5108 12.1148C12.6356 11.8652 12.574 11.6473 12.4792 11.4609C12.386 11.2729 11.6389 9.43597 11.3278 8.68888C11.0266 7.96509 10.7188 8.0616 10.4892 8.05161C10.2514 8.04189 10.0134 8.03745 9.77535 8.0383C9.5861 8.04312 9.39988 8.087 9.22837 8.16717C9.05686 8.24734 8.90377 8.36208 8.77868 8.50419C8.43592 8.87857 7.47253 9.78039 7.47253 11.6173C7.47253 13.4543 8.8103 15.2296 8.99665 15.4792C9.18301 15.7288 11.6289 19.4975 15.3727 21.1148C16.2645 21.4992 16.96 21.7288 17.5008 21.9018C18.3943 22.1864 19.2079 22.1448 19.8519 22.0499C20.569 21.9434 22.0599 21.1481 22.371 20.2762C22.6821 19.4043 22.6821 18.6572 22.589 18.5008C22.4958 18.3444 22.2445 18.2496 21.8735 18.0632Z" fill="#747270" />
                    </svg>
                  </a>
                  <a href="https://web.telegram.org/" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                      <path d="M22.7239 8.95522L19.8134 22.5C19.5896 23.5075 18.9179 23.7313 18.2463 23.1716L13.8806 19.9254L11.8657 21.9403C11.6418 22.1642 11.306 22.5 10.9701 22.5L11.306 18.1343L19.3657 10.8582C19.7015 10.5224 19.3657 10.2985 18.806 10.6343L8.84328 16.903L4.47761 15.3358C3.69403 15 3.69403 14.3284 4.81343 13.9925L21.4925 7.61194C22.1642 7.27612 22.8358 7.83582 22.7239 8.95522ZM15 30C6.71642 30 0 23.2836 0 15C0 6.71642 6.71642 0 15 0C23.2836 0 30 6.71642 30 15C29.8881 23.2836 23.1716 30 15 30ZM15 2.46269C8.0597 2.46269 2.35075 8.0597 2.35075 15.1119C2.35075 22.1642 8.0597 27.6493 15 27.6493C21.9403 27.6493 27.6493 22.0522 27.6493 15C27.6493 7.94776 21.9403 2.46269 15 2.46269Z" fill="#747270" />
                    </svg>
                  </a>
                  <a href="https://www.viber.com/" aria-label="Viber" target="_blank" rel="noopener noreferrer">
                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none">
                      <path d="M15.5665 0.0423764C22.6576 0.0651041 25.8167 2.38333 26.6122 3.11062C29.2259 5.36066 30.6577 10.3835 29.7032 18.2927C28.7486 25.9747 22.953 26.7247 21.9303 27.0656C21.4757 27.202 17.5893 28.1793 12.4983 27.7475L10.6801 29.8384C9.68005 30.8839 9.08913 31.8839 8.04366 31.543C7.22546 31.3157 7.24819 30.043 7.24819 29.9975V26.8156C-0.18378 24.7247 -0.0701415 17.0654 0.0207694 12.9745C0.0889526 8.86073 0.884423 5.54249 3.1572 3.29244C7.27091 -0.457634 15.5665 0.0196487 15.5665 0.0196487V0.0423764ZM4.90723 4.92884C2.9981 6.81524 2.36173 9.61075 2.29354 13.0426C2.22536 16.4518 1.83899 22.8837 7.93002 24.702L8.13457 24.7474V24.7929L8.08911 30.043C8.08911 30.3384 8.13457 30.543 8.31639 30.5884C8.43003 30.6112 8.63458 30.5657 8.77094 30.4066C9.79369 29.3839 12.9983 25.5202 12.9983 25.5202C17.3166 25.8156 20.7257 24.952 21.1121 24.8383C21.9758 24.5656 26.6804 24.1565 27.4759 17.7245C28.2941 11.1335 27.1577 6.58796 24.9758 4.70156C24.294 4.11064 21.4303 2.29242 15.4302 2.26969C15.4302 2.26969 8.36185 1.81514 4.90723 4.92884ZM10.2255 6.97433L11.3165 8.338C11.6346 8.79255 12.0437 9.45165 12.2483 9.8153C12.6347 10.4971 12.4074 11.179 12.021 11.4744L11.2937 12.0426C10.9074 12.3608 10.9528 12.9063 10.9528 12.9063C10.9528 12.9063 12.0665 17.0654 16.1802 18.1336C16.1802 18.1336 16.7484 18.1564 17.0438 17.7927L17.6348 17.0427C17.9075 16.6791 18.5893 16.4518 19.2712 16.8154C20.2836 17.4015 21.2352 18.0867 22.1121 18.8609C22.5439 19.2246 22.6349 19.77 22.3394 20.3155C22.0143 20.8854 21.6 21.3996 21.1121 21.8383C20.7642 22.1603 20.3297 22.3736 19.8621 22.4519H19.6803C19.4984 22.4519 19.3166 22.4519 19.1348 22.3837C17.941 21.9683 16.7914 21.4354 15.7029 20.7928C14.183 19.9537 12.7775 18.9225 11.521 17.7245L11.4301 17.6564V17.6336L11.3392 17.5655C10.1511 16.306 9.12776 14.9008 8.29366 13.3836C7.64602 12.3057 7.11281 11.1631 6.70272 9.97439V9.95166C6.61892 9.72686 6.58782 9.48582 6.61181 9.24711C6.65727 8.83801 6.86182 8.40618 7.22546 7.99708C7.68001 7.47434 8.20275 7.06524 8.74822 6.74706C9.31641 6.4516 9.8846 6.56523 10.2255 6.97433ZM14.7711 5.51976C17.1347 5.51976 19.1575 6.33796 20.7485 7.88344C22.3394 9.47438 23.1803 11.5881 23.2031 14.2699C23.2031 14.4206 23.1432 14.5651 23.0366 14.6717C22.9301 14.7783 22.7856 14.8381 22.6349 14.8381C22.4842 14.8381 22.3396 14.7783 22.2331 14.6717C22.1265 14.5651 22.0667 14.4206 22.0667 14.2699C22.0667 11.8835 21.3848 10.0426 19.9757 8.67891C18.5893 7.31525 16.862 6.63342 14.7711 6.63342C14.6234 6.63342 14.4818 6.57475 14.3773 6.47033C14.2729 6.3659 14.2142 6.22427 14.2142 6.07659C14.2142 5.92891 14.2729 5.78728 14.3773 5.68285C14.4818 5.57842 14.6234 5.51976 14.7711 5.51976ZM15.4756 7.61071H15.5211C17.0784 7.65085 18.5568 8.30431 19.6348 9.42893C20.1333 9.97321 20.5185 10.6111 20.7683 11.3057C21.018 12.0002 21.1271 12.7374 21.0894 13.4745C21.0864 13.6221 21.0248 13.7626 20.9182 13.8649C20.8117 13.9672 20.6689 14.0229 20.5212 14.0199C20.3735 14.0169 20.2331 13.9554 20.1308 13.8488C20.0285 13.7422 19.9727 13.5994 19.9757 13.4517C20.0212 12.1108 19.6348 11.0426 18.8393 10.1789C18.0211 9.29256 16.9075 8.81528 15.4302 8.70164C15.2855 8.70164 15.1468 8.64417 15.0445 8.54188C14.9422 8.43958 14.8847 8.30084 14.8847 8.15617C14.8847 8.01151 14.9422 7.87277 15.0445 7.77047C15.1468 7.66818 15.2855 7.61071 15.4302 7.61071H15.4756ZM16.0893 9.74712H16.112C17.9302 9.83803 18.953 10.8835 19.0439 12.7472C19.0499 12.8949 18.997 13.0389 18.8969 13.1476C18.7967 13.2563 18.6575 13.3207 18.5098 13.3267C18.3621 13.3328 18.2181 13.2799 18.1094 13.1797C18.0007 13.0795 17.9362 12.9403 17.9302 12.7926C17.862 11.4972 17.2938 10.9062 16.0665 10.838C15.9219 10.838 15.7831 10.7806 15.6808 10.6783C15.5785 10.576 15.5211 10.4372 15.5211 10.2926C15.5211 10.1479 15.5785 10.0092 15.6808 9.90688C15.7831 9.80458 15.9219 9.74712 16.0665 9.74712H16.0893Z" fill="#747270" />
                    </svg>
                  </a>
                </div>
              </div>
              <CustomCheckbox
                label="Ja, ich möchte mich für den Newsletter anmelden."
                checked={isChecked}
                onChange={handleCheckboxChange}
                required
              />
              {formErrors && <p className={styles.error}>{formErrors}</p>}
            </form>
          </div>
        </div>
      </div>
      <span className={styles.copyright}>
        Copyright © Mr. Transporter GmbH 2004
      </span>
    </footer>
  );
};

export default Footer;
