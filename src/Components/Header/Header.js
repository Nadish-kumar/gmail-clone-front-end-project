import React from "react";
import "../Header/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import gmail from "../../assest/img/gmail.jpg";
import { Paper, InputBase, Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import cto2 from "../../assest/img/cto2.png";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const Header = () => {
  return (
    <div className=" header">
      <div className="header__left">
        <span className="material__icons">
          <MenuIcon />
        </span>
        <img src={gmail} alt="gmail" />
      </div>
      <div className="header__middle">
        <span className="material__icons">
          <SearchIcon />
        </span>
        <input placeholder="search" />
      </div>
      <div className="header__right">
        <span className="material__icons">
          <HelpOutlineIcon />
        </span>
        <span className="material__icons">
          <SettingsIcon />
        </span>
        <span className="material__icons">
          <AppsIcon />
        </span>
        <Avatar src={cto2} />
      </div>
    </div>
  );
};

export default Header;
