import React from "react";

const Button = (props) => {
  const classes =
    "hover:cursor-pointer hover:opacity-80 rounded-full shadow-lg";

  return (
    <button onClick={props.onClick} className={`${classes} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
