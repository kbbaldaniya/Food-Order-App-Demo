import React from "react";
import "./Food.css";
import FoodItem from "./FoodItem";
const AvailableFood = [
  {
    id: 1,
    name: "Burger",
    disc: "American,Desserts,Beverages,Fast Food",
    price: 150,
  },
  {
    id: 2,
    name: "Pizza",
    disc: "Pizza,Fast Food",
    price: 199,
  },
  {
    id: 3,
    name: "Masala Dosa",
    disc: "South - Indian,Fast Food",
    price: 160,
  },
];

const Food = () => {
  const FoodList = AvailableFood.map((food) => (
    <FoodItem
      id={food.id}
      key={food.id}
      name={food.name}
      disc={food.disc}
      price={food.price}
    />
  ));
  return (
    <div>
      <section className="summary">
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
      <section className="food">
        <div className="card">
          <ul>{FoodList}</ul>
        </div>
      </section>
    </div>
  );
};

export default Food;
