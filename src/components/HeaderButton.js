import React, { useContext, useState, useEffect } from "react";
import "./HeaderButton.css";
import cartIcon from "../Images/carticon.png";
import CartContext from "./Common.Comp/CartContext";

const HeaderButton = (props) => {
  const [btnHighlight, setBtnHighlight] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClass = `${"button"} ${btnHighlight ? "bump" : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx]);

  return (
    <div>
      <button className={btnClass} onClick={props.onClick}>
        <span className="icon">
          <img width="22px" src={cartIcon} alt="Cart Icon" />
        </span>
        <span>Your Cart</span>
        <span className="count">{numberOfCartItem}</span>
      </button>
    </div>
  );
};

export default HeaderButton;
