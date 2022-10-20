import { configureStore } from "@reduxjs/toolkit";

import cartStlice from "./cart-slice";

const store = configureStore({
    reducer:{cart: cartStlice.reducer}
})

export default store;