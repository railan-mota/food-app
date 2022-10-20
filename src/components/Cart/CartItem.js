import React from "react";
import CartAmount from "./CartAmount";

const CartItem = (props) => {
  return (
    <li className="grid md:grid-cols-5 grid-cols-6 text-black">
      <div className="p-4 text-left col-span-2 flex items-center justify-center lg:justify-start">
        <span>{props.item.name}</span>
      </div>
      <div className=" md:col-span-1 col-span-2 flex items-center justify-center ">
        <CartAmount id={props.item.key} amount={props.item.amount} item={props.item} />
      </div>
      <div className="p-4 text-center flex items-center justify-center">
        <span>${props.item.unitPrice.toFixed(2)}</span>
      </div>
      <div className="p-4 text-center flex items-center justify-center">
        <span>${(props.item.unitPrice * props.item.amount).toFixed(2)}</span>
      </div>
    </li>
  );
};

export default CartItem;
