import React from "react";
import HeadImage from "../img/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="center">
      <img src={HeadImage} alt="" />
    </div>
  );
};

export default Header;
