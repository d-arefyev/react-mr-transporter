import React from "react";
import styles from "./Input.module.scss";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
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
        placeholder={placeholder}
        required={required}
        className={`${styles["inputField"]} ${className}`}
      />
      {error && <span className={styles["inputError"]}>{error}</span>}
    </div>
  );
};

export default Input;




// // использование компонента
// import React, { useState } from "react";
// import Input from "./Input";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState("");

//   const handleBlur = () => {
//     if (!username.trim()) {
//       setError("Имя пользователя не может быть пустым");
//     } else {
//       setError("");
//     }
//   };

//   return (
//     <div>
//       <h1>Пример компонента Input</h1>
//       <Input
//         label="Имя пользователя"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         onBlur={handleBlur}
//         placeholder="Введите имя пользователя"
//         error={error}
//       />
//     </div>
//   );
// };

// export default App;
