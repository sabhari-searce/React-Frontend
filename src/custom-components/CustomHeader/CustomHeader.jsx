import React from "react";
import "./CustomHeader.css";
import CustomInputSearch from "./HeaderSearch/HeaderSearch";
import HeaderIconsSuccess from "./HeaderIcons/HeaderIconsSuccess";
import HeaderIconsBell from "./HeaderIcons/HeaderIconsBell";
import HeaderIconsHistory from "./HeaderIcons/HeaderIconHistory";

const CustomHeader = () => {
  return (
    <header className="header">
      <nav className="navbar container">
        <CustomInputSearch />
        <ul className="navbar__menu">
          <li className="navbar__item">
            <HeaderIconsSuccess />
          </li>
          <li className="navbar__item">
            <HeaderIconsBell />
          </li>
          <li className="navbar__item">
            <HeaderIconsHistory />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CustomHeader;
