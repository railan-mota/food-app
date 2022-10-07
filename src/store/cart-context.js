import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  addAmount: (id) => {},
  removeAmount: (id) => {},
});

export default CartContext;
