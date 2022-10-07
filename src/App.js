import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <CartProvider>
      <div className="min-h-screen overflow-hidden">
        {isCartVisible && <Cart onClose={hideCart} />}
        <Header onClickCart={showCart} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
