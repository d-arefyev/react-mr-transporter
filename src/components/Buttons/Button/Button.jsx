// import React from "react";
// import styles from "./Button.module.scss";

// const Button = ({
//   type = "button",          // Тип кнопки: "button", "submit", "reset"
//   label = "",               // Текст кнопки (по умолчанию пустой)
//   icon = null,              // Иконка в виде JSX-элемента (по умолчанию отсутствует)
//   onClick = () => {},       // Функция-обработчик клика
//   disabled = false,         // Блокировка кнопки
//   className = "",           // Дополнительные CSS-классы
//   style = {},               // Inline-стили
//   iconPosition = "left",    // Позиция иконки: "left" или "right"
//   ariaLabel = label,        // ARIA-label для доступности
//   showLabel = true,         // Опционально скрыть/показать текст кнопки
//   tabIndex = 0,             // TabIndex для управления фокусом
//   role = "button",          // Роль элемента (по умолчанию "button")
// }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       disabled={disabled}
//       className={`${styles.Button} ${
//         disabled ? styles.disabled : ""
//       } ${className}`}
//       style={style}
//       aria-label={ariaLabel}
//       tabIndex={tabIndex}
//       role={role}
//     >
//       {icon && iconPosition === "left" && (
//         <span className={styles.icon}>{icon}</span>
//       )}
//       {showLabel && label && <span className={styles.label}>{label}</span>}
//       {icon && iconPosition === "right" && (
//         <span className={styles.icon}>{icon}</span>
//       )}
//     </button>
//   );
// };

// export default Button;
