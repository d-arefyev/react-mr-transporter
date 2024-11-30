import React from "react";
import styles from "./LoginButton.module.scss";

const LoginButton = ({ onClick }) => {
  return (
    <button className={styles.LoginButton} onClick={onClick}>
      <span className={styles.icon}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path d="M10.5 0C5.079 0 0.5 4.579 0.5 10C0.5 15.421 5.079 20 10.5 20C15.921 20 20.5 15.421 20.5 10C20.5 4.579 15.921 0 10.5 0ZM10.5 5C12.227 5 13.5 6.272 13.5 8C13.5 9.728 12.227 11 10.5 11C8.774 11 7.5 9.728 7.5 8C7.5 6.272 8.774 5 10.5 5ZM5.394 14.772C6.291 13.452 7.787 12.572 9.5 12.572H11.5C13.214 12.572 14.709 13.452 15.606 14.772C14.328 16.14 12.515 17 10.5 17C8.485 17 6.672 16.14 5.394 14.772Z" fill="currentColor" />
        </svg>
      </span>
      <span className={styles.LoginButtonLable}>Anmelden</span>
    </button>
  );
};

export default LoginButton;

