import React from "react";
import styles from "./CustomRadioButton.module.scss";

const CustomRadioButton = ({
  label,
  checkedColor = "var(--color-accent)",
  uncheckedBorderColor = "var(--color-gray)",
  className = "",
  checked = false,
  onChange,
  ...props
}) => {
  return (
    <label className={`${styles.radioButtonWrapper} ${className}`}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
        {...props}
        className="hidden"
      />
      <div
        className={`${styles.radioButton} ${checked ? styles.radioButtonChecked : ""}`}
        style={{
          borderColor: uncheckedBorderColor,
          backgroundColor: checked ? checkedColor : "transparent",
        }}
      >
        {checked && <div className={styles.radioButtonCheckedInner} />}
      </div>
      {label && <span className={styles.radioLabel}>{label}</span>}
    </label>
  );
};

export default CustomRadioButton;
