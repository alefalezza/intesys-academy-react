import React from "react";
import { Cell, Row } from "@material/react-layout-grid";
import MaterialIcon from "@material/react-material-icon";

const Toolbar: React.FunctionComponent = () => (
  <Row className='layout-header-toolbar'>
    <Cell columns={6} className='layout-header-toolbar-welcome-message'>
      Hospital St. Democrito - Welcome back, Mario Rossi
    </Cell>
    <Cell columns={6} className='layout-header-toolbar-menu'>
      <div className='layout-header-toolbar-menu-search'>
        <MaterialIcon icon='search' />
        <input type='text' placeholder='search' />
      </div>
      <ul>
        <li>
          <MaterialIcon icon='notifications_none' />
        </li>
        <li>
          <MaterialIcon icon='question_answer' />
        </li>
        <li>
          <MaterialIcon icon='date_range' />
        </li>
        <li>
          <MaterialIcon icon='settings' />
        </li>
      </ul>
    </Cell>
  </Row>
);

export default Toolbar;
