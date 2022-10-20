import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart-slice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";

const CartAmount = (props) => {
  const dispatch = useDispatch();

  const addHandler = (event) => {
    event.preventDefault();
    dispatch(
      CartActions.increase({
        item: props.item,
        amount: 1,
      })
    );
  };

  const removeHandler = (event) => {
    event.preventDefault();
    dispatch(CartActions.decrease(props.item.key));
  };

  const blurHandler = (event) => {
    event.target.blur();
  };

  return (
    <form className={"flex items-center space-x-4 lg:space-x-8"}>
      <div>
        <Button
          onClick={removeHandler}
          className="bg-gray-800 rounded-tr-none rounded-br-none px-3 py-1"
        >
          <FontAwesomeIcon icon={faMinus} className="text-white" />
        </Button>
        <input
          type="number"
          step="1"
          value={props.item.amount}
          placeholder="1"
          className="w-10  py-1 text-center hover:cursor-default"
          onFocus={blurHandler}
        />
        <Button
          onClick={addHandler}
          className="bg-gray-800 rounded-tl-none rounded-bl-none px-3 py-1 "
        >
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </Button>
      </div>
    </form>
  );
};

export default CartAmount;
