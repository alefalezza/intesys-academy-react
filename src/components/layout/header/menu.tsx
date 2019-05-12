import React from "react";
import { Row, Cell } from "@material/react-layout-grid";
import logo from "../../../assets/logo.png";

const Menu: React.FunctionComponent = () => (
  <Row className='layout-header-menu'>
    <Cell columns={2} className='logo'>
      <img src={logo} alt='open hospital' />
    </Cell>
    <Cell columns={10} className='menu'>
      <ul>
        <li>
          <a href=''>Dashboard</a>
        </li>
        <li>
          <a href=''>Patients database</a>
        </li>
        <li>
          <a href=''>Colleagues database</a>
        </li>
        <li>
          <a href=''>Pharmacy</a>
        </li>
        <li>
          <a href=''>Ward</a>
        </li>
        <li>
          <a href=''>Billing</a>
        </li>
        <li>
          <a href=''>News</a>
        </li>
      </ul>
    </Cell>
  </Row>
);

export default Menu;
