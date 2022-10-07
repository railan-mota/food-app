import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const HeaderCart = (props) => {
  const ctx = useContext(CartContext);

  const classes = "px-3 py-1 bg-[#61AB0B] rounded-full shadow-lg";

  const [enteredClasses, setClasses] = useState(classes);

  useEffect(() => {
    setClasses(`${classes} animate-ping`);
    setTimeout(() => {
      setClasses(classes);
    }, 500);
  }, [ctx.totalAmount]);

  return (
    <Button
      className="bg-[#467B08] flex justify-between items-center space-x-2 md:space-x-8 px-6 py-2"
      onClick={props.onClickCart}
    >
      <FontAwesomeIcon icon={faCartShopping} className="fa-2x" />
      <p>Your Cart</p>
      <div className={enteredClasses}>{ctx.totalAmount}</div>
    </Button>
  );
};

export default HeaderCart;
