import React, { useContext } from "react";
import Button from "../UI/Button";

import Modal from "../UI/Modal";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import CartSummary from "./CartSummary";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItems = ctx.items.map((item) => {
    return <CartItem item={item} />;
  });

  const cartAmount =
    ctx.items.length === 1
      ? `${ctx.items.length} Item`
      : `${ctx.items.length} Items`;

  let itemPrice = 0;
  let totalPrice = 0;

  if (ctx.items.length !== 0) {
    itemPrice = ctx.items.map((item) => item.unitPrice * item.amount);
    totalPrice = itemPrice.reduce((a, b) => a + b);
  } else {
    itemPrice = 0;
    totalPrice = 0;
  }

  let hasItens = ctx.items.length ? true : false;

  return (
    <Modal onClose={props.onClose}>
      <div className="lg:p-10 grid lg:grid-cols-6 ">
        <div className="lg:col-span-4 mb-4 lg:mr-4">
          <CartHeader amount={ctx.items.length} />
          <ul className="divide-y-2 lg:mb-8">{cartItems}</ul>
        </div>
        <CartSummary
          hasItens={hasItens}
          totalPrice={totalPrice.toFixed(2)}
          cartAmount={cartAmount}
        />
      </div>
      <div className="flex justify-center items-center m-2 font-bold text-gray-100">
        <Button onClick={props.onClose} className="px-8 py-4 bg-red-600">
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
