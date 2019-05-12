import React from "react";
import Toolbar from "./toolbar";
import Menu from "./menu";
import "./index.scss";

const Header: React.FunctionComponent = () => (
  <div className='layout-header'>
    <Toolbar />
    <Menu />
  </div>
);

export default Header;
