import React from "react";
import "./Header.css";
import headerImade from "../Images/headerImage.jpeg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <h1>Online Food</h1>
        <HeaderButton onClick={props.onCartShow} />
      </header>
      <div className="main-image">
        <img src={headerImade} alt="Order Food Online" />
      </div>
    </div>
  );
};

export default Header;
