import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";

const CartAmount = (props) => {
  const ctx = useContext(CartContext);

  const addHandler = (event) => {
    event.preventDefault();
    ctx.addAmount(props.id);
  };

  const removeHandler = (event) => {
    event.preventDefault();
    ctx.removeAmount(props.id);
  };

  const blurHandler = (event) => {
    event.target.blur();
  };

  return (
    <form className={"flex items-center space-x-4 lg:space-x-8"}>
      <div>
        <Button
          onClick={removeHandler}
          className="bg-gray-800 rounded-tr-none rounded-br-none px-3 py-1"
        >
          <FontAwesomeIcon icon={faMinus} className="text-white" />
        </Button>
        <input
          type="number"
          step="1"
          value={props.amount}
          placeholder="1"
          className="w-10  py-1 text-center hover:cursor-default"
          onFocus={blurHandler}
        />
        <Button
          onClick={addHandler}
          className="bg-gray-800 rounded-tl-none rounded-bl-none px-3 py-1 "
        >
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </Button>
      </div>
    </form>
  );
};

export default CartAmount;
