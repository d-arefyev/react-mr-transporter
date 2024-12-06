import React from "react";
import styles from "./AccentButton.module.scss";

const AccentButton = ({
  type = "button",          // Тип кнопки: "button", "submit", "reset"
  label = "",               // Текст кнопки
  icon = null,              // Иконка в виде JSX-элемента
  onClick = () => {},       // Обработчик клика
  disabled = false,         // Блокировка кнопки
  className = "",           // Дополнительные классы
  style = {},               // Inline-стили
  iconPosition = "left",    // Позиция иконки: "left" или "right"
  ariaLabel = label,        // ARIA-label для доступности
  showLabel = true,         // Опционально скрыть/показать текст
  tabIndex = 0,             // TabIndex для управления фокусом
  role = "button",          // Роль элемента
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

