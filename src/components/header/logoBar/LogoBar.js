import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../../../styles/logoBar.scss";

const Menubar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="container">
      <div className="logo-bar">
        {isShowMenu ? (
          <CloseIcon
            className="close-icon"
            onClick={() => setIsShowMenu(false)}
          ></CloseIcon>
        ) : (
          <MenuIcon
            className="hamburger-icon"
            onClick={() => setIsShowMenu(true)}
          ></MenuIcon>
        )}
        <Link
          className="logo normal-text"
          to="/"
          onClick={() => setIsShowMenu(false)}
        >
          logo
        </Link>
        <div className="search-bar">... Search Bar ...</div>
        <nav className={isShowMenu ? "menu-show" : ""}>
          {isShowMenu ? (
            <Link
              className="account-logo"
              to="/"
              onClick={() => setIsShowMenu(false)}
            >
              logo
            </Link>
          ) : (
            ""
          )}
          <NavLink
            exact="true"
            to="/account"
            onClick={() => setIsShowMenu(false)}
          >
            Account
          </NavLink>
          <NavLink exact="true" to="/cart" onClick={() => setIsShowMenu(false)}>
            Cart
          </NavLink>
          <div className="global-grp">
            <div className="global-item">Lang</div>
            <div className="global-item">HKD</div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menubar;
