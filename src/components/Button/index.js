import React from "react";
import "./Button.scss";

const Button = ({ children, variant }) => {
  return <button className={`${variant}-btn`}>{children}</button>;
};

export default Button;
