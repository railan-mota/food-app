import React from "react";

const CartHeader = (props) => {
  const cartAmount =
    props.amount === 1 ? `${props.amount} Item` : `${props.amount} Items`;

  const header = (
    <div className="grid md:grid-cols-5 grid-cols-6 text-amber-600">
      <div className="p-4 col-span-2 flex items-center justify-center lg:justify-start">
        <span>Product details</span>
      </div>
      <div className="text-center md:col-span-1 col-span-2 flex items-center justify-center">
        <span>Quantity</span>
      </div>
      <div className="text-center flex items-center justify-center">
        <span>Unit Price</span>
      </div>
      <div className="text-center flex items-center justify-center">
        <span>Price</span>
      </div>
    </div>
  );

  const msgNoItem = (
    <p className="text-center text-xl font-bold text-amber-600">NO ITEM</p>
  );

  return (
    <>
      <div className="grid grid-cols-6 text-gray-800 font-bold text-lg">
        <div className="col-span-4 md:col-span-5 flex items-center justify-start p-4">
          <span>Shopping Cart</span>
        </div>
        <div className="text-center md:col-span-1 col-span-2 flex items-center justify-end md:justify-center p-4 ">
          <span>{props.amount ? cartAmount : "NO ITEM"}</span>
        </div>
      </div>
      {props.amount ? header : msgNoItem}
    </>
  );
};

export default CartHeader;
