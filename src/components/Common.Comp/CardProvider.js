import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existCartItem = state.items[existCartIndex];
    let updatedItems;

    if (existCartItem) {
      const updatedItem = {
        ...existCartItem,
        amount: existCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existCartItem = state.items[existCartIndex];
    const updatedTotalAmount = state.totalAmount - existCartItem.price;
    let updatedItems;
    if (existCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existCartItem,
        amount: existCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existCartIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
