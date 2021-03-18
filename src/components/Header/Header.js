import React from "react";

import "./Header.css";
import img1 from "../../assets/HrcLogo.svg";
import img2 from "../../assets/abcLogo.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="header__image">
        <img className="proLogo" src={img2} alt="" />
        <img className="header__logo" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Header;
