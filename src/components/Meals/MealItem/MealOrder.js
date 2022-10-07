import React, { useContext, useRef } from "react";
import CartContext from "../../../store/cart-context";

import Button from "../../UI/Button";
import MealAmount from "./MealAmount";

const MealOrder = (props) => {
  const ctx = useContext(CartContext);

  const inputRef = useRef();

  const removeValue = (event) => {
    event.preventDefault();
    if (+inputRef.current.value <= 1) {
      return;
    } else {
      inputRef.current.value--;
    }
  };

  const addValue = (event) => {
    event.preventDefault();
    inputRef.current.value++;
  };

  const addCartHandler = (event) => {
    event.preventDefault();
    ctx.addItem({
      amount: +inputRef.current.value,
      item: props.item,
    });

    inputRef.current.value = 1;
  };

  return (
    <div className="w-full flex justify-between items-center">
      <MealAmount
        ref={inputRef}
        onRemoveValue={removeValue}
        onAddValue={addValue}
      />
      <Button
        className="bg-amber-600 text-white px-5 py-2"
        onClick={addCartHandler}
      >
        Add
      </Button>
    </div>
  );
};

export default MealOrder;
