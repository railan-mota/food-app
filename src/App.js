import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { CartActions } from "./components/store/cart-slice";

function App() {
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(CartActions.toggleCart());
  };

  const hideCart = () => {
    dispatch(CartActions.toggleCart());
  };

  return (
    <>
      <div className="min-h-screen overflow-hidden">
        {isVisible && <Cart onClose={hideCart} />}
        <Header onClickCart={showCart} />
        <main>
          <Meals />
        </main>
      </div>
    </>
  );
}

export default App;
