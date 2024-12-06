import React, { useState } from "react";
import styles from "./InputDate.module.scss";

const InputDate = ({ label, value = "", onChange, required = false, className = "" }) => {
  const [isDateSelected, setIsDateSelected] = useState(false);

  const handleDateChange = (e) => {
    onChange(e);
    setIsDateSelected(!!e.target.value);
  };

  return (
    <div className={`${styles.inputDateWrapper} ${className}`}>
      {label && <label className={styles.inputDateLabel}>{label}</label>}
      <div className={styles.inputDateFieldWrapper}>
        <input
          type="date"
          value={value}
          onChange={handleDateChange}
          required={required}
          className={`${styles.inputDateField} ${isDateSelected ? styles.dateSelected : ""}`}
        />
        <img
          src="/icons/calend.svg"
          alt="Calendar Icon"
          className={styles.inputDateIcon}
        />
      </div>
    </div>
  );
};

export default InputDate;
