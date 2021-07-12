import "./App.css";
import React, { useState } from "react";
import CardProvider from "./components/Common.Comp/CardProvider";
import Header from "./components/Header";
import Food from "./components/Foods/Food";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const handleCartShow = () => {
    setCartShow(true);
  };
  const handleCartHide = () => {
    setCartShow(false);
  };
  return (
    <CardProvider onClick={handleCartHide}>
      {cartShow && <Cart onClose={handleCartHide} />}
      <Header onCartShow={handleCartShow} />
      <Food />
    </CardProvider>
  );
}

export default App;
