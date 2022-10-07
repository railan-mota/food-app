import React from "react";

import MealOrder from "./MealOrder";

const MealItem = (props) => {
  return (
    <li className="text-left py-2.5 space-y-4">
      <MealOrder item={props.item} />
      <div className="space-y-1">
        <h3 className="text-base font-bold">{props.item.name}</h3>
        <p className="italic">{props.item.description}</p>
        <p className="text-amber-600 font-bold">${props.item.unitPrice}</p>
      </div>
    </li>
  );
};

export default MealItem;
