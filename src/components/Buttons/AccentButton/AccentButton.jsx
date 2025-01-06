import React from "react";
import styles from "./AccentButton.module.scss";

const AccentButton = ({
  type = "button",          // Type of button: "button", "submit", "reset"
  label = "",               // Button text
  icon = null,              // Icon as a JSX element
  onClick = () => {},       // Click handler
  disabled = false,         // Button lock
  className = "",           // Additional classes
  style = {},               // Inline styles
  iconPosition = "left",    // Icon position: "left" or "right"
  ariaLabel = label,        // ARIA-label for accessibility
  showLabel = true,         // Optionally hide/show text
  tabIndex = 0,             // TabIndex for focus control
  role = "button",          // Role of the element
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.Button} ${
        disabled ? styles.disabled : ""
      } ${className}`}
      style={style}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      role={role}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {showLabel && label && <span className={styles.label}>{label}</span>}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

export default AccentButton;

