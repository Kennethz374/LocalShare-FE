import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks"
import "./MainNavigation.css";

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link>ShareLocal</Link>
      </h1>
      <NavLinks>...</NavLinks>
    </MainHeader>
  );
};

export default MainNavigation;
