import React, { useEffect, useState } from "react";
import MealItem from "./MealItem/MealItem";

const MealsAvaliable = () => {
  const [itens, setItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-b1b29-default-rtdb.firebaseio.com/itens.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const meals = [];

      for (const key in data) {
        meals.push({
          key: key,
          name: data[key].name,
          description: data[key].description,
          unitPrice: data[key].unitPrice,
        });

        setItens(meals);
        setIsLoading(false);
      }
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealItens = itens.map((item) => {
    return <MealItem item={item} key={item.key} />;
  });

  const loading = (
    <li className="font-bold text-xl h-10 p-2.5 animate-pulse">
      <div className="text-center"> Loading...</div>
    </li>
  );

  const error = (
    <li className="font-bold text-red-600 text-xl h-10 p-2.5">
      <div className="text-center">{httpError}</div>
    </li>
  );

  return (
    <ul className="divide-y-2 divide-gray-400 w-11/12 md:w-3/4 mx-auto bg-zinc-300 text-slate-900 rounded-xl px-4">
      {isLoading && loading}
      {httpError && !isLoading && error}
      {!isLoading && !httpError && mealItens}
    </ul>
  );
};

export default MealsAvaliable;
