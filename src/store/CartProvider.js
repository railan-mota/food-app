import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    if (state.items.filter((i) => action.item.key === i.key).length === 0) {
      const itemUpdated = { ...action.item, amount: action.amount };
      const updatedItens = state.items.concat(itemUpdated);
      return {
        items: updatedItens,
        totalAmount: state.totalAmount + action.amount,
      };
    } else {
      const indexItemAdd = state.items.findIndex(
        (item) => item.key === action.item.key
      );
      const newItems = state.items;
      newItems[indexItemAdd].amount =
        action.amount + state.items[indexItemAdd].amount;
      return {
        items: newItems,
        totalAmount: state.totalAmount + action.amount,
      };
    }
  } else if (action.type === "ADD_AMOUNT") {
    const indexItemAdd = state.items.findIndex(
      (item) => item.key === action.key
    );
    const newItems = state.items;
    newItems[indexItemAdd].amount++;
    return {
      items: newItems,
      totalAmount: state.totalAmount + 1,
    };
  } else if (action.type === "REMOVE_AMOUNT") {
    const indexItemAdd = state.items.findIndex(
      (item) => item.key === action.key
    );
    if (state.items[indexItemAdd].amount === 1) {
      const newItems = state.items.filter((item) => item.key !== action.key);
      return {
        items: newItems,
        totalAmount: state.totalAmount - 1,
      };
    } else {
      const indexItemAdd = state.items.findIndex(
        (item) => item.key === action.key
      );
      const newItems = state.items;
      newItems[indexItemAdd].amount--;
      return {
        items: newItems,
        totalAmount: state.totalAmount - 1,
      };
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({
      type: "ADD_ITEM",
      item: item.item,
      amount: item.amount,
    });
  };

  const addAmount = (id) => {
    dispatchCartState({
      type: "ADD_AMOUNT",
      key: id,
    });
  };

  const removeAmount = (id) => {
    dispatchCartState({
      type: "REMOVE_AMOUNT",
      key: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    addAmount: addAmount,
    removeAmount: removeAmount,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
