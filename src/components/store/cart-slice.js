import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  isVisible: false,
};

const cartStlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase(state, action) {
      if (state.items.find((i) => action.payload.item.key === i.key)) {
        const index = state.items.findIndex(
          (i) => action.payload.item.key === i.key
        );
        state.items[index].amount =
          state.items[index].amount + action.payload.amount;
        state.totalAmount = state.totalAmount + action.payload.amount;
      } else {
        const item = action.payload.item;
        item.amount += action.payload.amount;
        state.items.push(item);
        state.totalAmount += action.payload.amount;
      }
    },

    decrease(state, action) {
      const index = state.items.findIndex((i) => action.payload === i.key);
      if (state.items[index].amount === 1) {
        state.items = state.items.filter((i) => i.key !== action.payload);
      } else {
        state.items[index].amount--;
      }
      state.totalAmount--;
    },

    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const CartActions = cartStlice.actions;

export default cartStlice;
