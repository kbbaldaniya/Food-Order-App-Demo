import React, { useRef, useState, useContext } from "react";
import "./FoodItem.css";
import CartContext from "../Common.Comp/CartContext";
import Input from "../Common.Comp/Input";

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    addToCartHandler(enteredAmountNumber);
  };
  return (
    <li className="food-item">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.disc}</div>
        <div className="price">{props.price.toFixed(2)}</div>
      </div>
      <form className="form" onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          input={{
            type: "number",
            id: "amount",
            min: "1",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
        {!amountIsValid && <p>Enter Valid Amount (1-5).</p>}
      </form>
    </li>
  );
};

export default FoodItem;
