import React, { useState } from 'react';
import styles from './CustomCheckbox.module.scss';

const CustomCheckbox = ({ label, checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.checkbox}
      />
      <div
        className={`${styles.checkboxBox} ${isChecked ? styles.checkboxBoxChecked : ''}`}
      >
        {isChecked && (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className={styles.checkboxIcon}
          >
            <path
              d="M0.99998 4.42857L5.32001 9L13 1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
