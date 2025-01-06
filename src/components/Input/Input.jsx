import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  onKeyDown,
  placeholder = "",
  className = "",
  labelClassName = "",
  required = false,
  name,
  error = "",
}) => {
  return (
    <div className={styles["inputWrapper"]}>
      {label && (
        <label
          htmlFor={name}
          className={`${styles["inputLabel"]} ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
        className={`${styles["inputField"]} ${className}`}
      />
      {error && <span className={styles["inputError"]}>{error}</span>}
    </div>
  );
};

export default Input;
