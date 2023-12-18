import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import LogoBar from "./logoBar/LogoBar";
import Category from "./category/Category";
import "../../styles/header.scss";

const Menubar = () => {
  return (
    <div>
      <div className="header-column">
        <LogoBar />
        <Category />
      </div>
    </div>
  );
};

export default Menubar;
