import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../Common.Comp/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItem = cartCtx.items.length > 0;

  const handleAddItem = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const handleRemoveItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={() => handleAddItem(item)}
          onRemove={() => handleRemoveItem(item.id)}
        />
      ))}
    </ul>
  );
  return (
    <div className="modal">
      {cartItem}
      <div className="total">
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className="button">Order</button>}
      </div>
    </div>
  );
};

export default Cart;
