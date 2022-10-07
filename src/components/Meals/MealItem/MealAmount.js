import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "../../UI/Button";

const MealAmount = React.forwardRef((props, ref) => {
  const blurHandler = (event) => {
    event.target.blur();
  };

  return (
    <form className={"flex items-center space-x-4 lg:space-x-8"}>
      <label>Amount</label>
      <div>
        <Button
          onClick={props.onRemoveValue}
          className="bg-gray-800 rounded-tr-none rounded-br-none px-3 py-1"
        >
          <FontAwesomeIcon icon={faMinus} className="text-white" />
        </Button>
        <input
          ref={ref}
          type="number"
          step="1"
          defaultValue={1}
          className="w-10  py-1 text-center hover:cursor-default hover:overscroll-none"
          onFocus={blurHandler}
        />
        <Button
          onClick={props.onAddValue}
          className="bg-gray-800 rounded-tl-none rounded-bl-none px-3 py-1"
        >
          <FontAwesomeIcon icon={faPlus} className="text-white" />
        </Button>
      </div>
    </form>
  );
});

export default MealAmount;
