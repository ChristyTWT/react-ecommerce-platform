import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/category.scss";

const Menubar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return <div className="container"><div className="category-bar">Hello World</div></div>
};

export default Menubar;
