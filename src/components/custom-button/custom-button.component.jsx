import React from "react";
import "./custom-button.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "googleButton" : ""
    } customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
