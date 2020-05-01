import React from "react";

import styles from "./form-input.module.scss";

const FormInput = ({ handleChanges, label, ...otherProps }) => (
  <div className={styles.group}>
    <input
      className={styles.formInput}
      onChange={handleChanges}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? styles.shrink : ""} ${
          styles.formInputLabel
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
