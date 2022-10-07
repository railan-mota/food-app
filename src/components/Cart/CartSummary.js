import React, { useState } from "react";
import Button from "../UI/Button";

function CartSummary(props) {
  const [enteredShipping, setEnteredShipping] = useState(2.99);

  const changeShippingHandler = (event) => {
    if (event.target.value === "A") {
      setEnteredShipping(0);
    } else if (event.target.value === "B") {
      setEnteredShipping(2.99);
    } else if (event.target.value === "C") {
      setEnteredShipping(4.99);
    }
  };

  const totalPrice = (+props.totalPrice + enteredShipping).toFixed(2);

  return (
    <div className="bg-neutral-200 text-slate-800 lg:col-span-2 p-4 space-y-4">
      <h2 className="text-center border-b-2 pb-4">Order Summary</h2>
      <div className="flex justify-between items-center uppercase">
        <h2>{props.hasItens ? props.cartAmount : "No Item"}</h2>
        <h2>{`SUBTOTAL $${props.totalPrice}`}</h2>
      </div>
      <div className="flex flex-col justify-between items-start uppercase space-y-4 border-b-2 pb-4">
        <label htmlFor="shipping">Shipping</label>
        <select
          onChange={changeShippingHandler}
          defaultValue="B"
          name="shipping"
          id="shipping"
          className="w-full bg-white p-3"
        >
          <option value="A">No Rush - Free</option>
          <option value="B">Regular - $2.99</option>
          <option value="C">Express - $4.99</option>
        </select>
      </div>
      <div className="flex flex-col justify-between items-start uppercase space-y-4 border-b-2 pb-4">
        <label htmlFor="promoCode">Promo Code</label>
        <input
          name="promoCode"
          id="promoCode"
          type="text"
          placeholder="Enter your code"
          className="w-full bg-white p-2 outline-none"
        />
        <Button className="bg-orange-500 text-white uppercase py-3 px-6 font-bold">
          Apply
        </Button>
      </div>
      <div className="flex flex-col justify-between space-y-4 ">
        <div className="flex justify-between uppercase font-bold">
          <p>TOTAL</p>
          <p>{props.hasItens ? `$${totalPrice}` : "No Item"}</p>
        </div>
        {props.hasItens && (
          <Button className="bg-purple-700 px-6 py-4 w-full mx-auto text-white font-extrabold">
            CHECKOUT
          </Button>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
