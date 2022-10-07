import React from "react";

import MealSumary from "./MealSumary";
import MealsAvaliable from "./MealsAvaliable";

const Meals = () => {
  return (
    <>
      <div className="container mx-auto pt-2.5 pb-5 space-y-5 min-h-full">
        <MealSumary />
        <MealsAvaliable />
      </div>
    </>
  );
};

export default Meals;
