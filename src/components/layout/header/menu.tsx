import React from "react";
import { Row, Cell } from "@material/react-layout-grid";
import logo from "../../../assets/logo.png";
import MainMenu from "../../main_menu";
import { Link } from "react-router-dom";

const Menu: React.FunctionComponent = () => (
  <Row className='layout-header-menu'>
    <Cell columns={2} className='logo'>
      <Link to='/'>
        <img src={logo} alt='open hospital' />
      </Link>
    </Cell>
    <Cell columns={10} className='menu'>
      <MainMenu />
    </Cell>
  </Row>
);

export default Menu;
