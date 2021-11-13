import React from "react";
import { Link } from "react-router-dom";

const MainMenu: React.FunctionComponent = () => (
  <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="/patients">Patients database</Link>
    </li>
    <li>
      <Link to="/staff">Colleagues database</Link>
    </li>
    <li>
      <Link to="/pharmacy">Pharmacy</Link>
    </li>
    <li>
      <Link to="/ward">Ward</Link>
    </li>
    <li>
      <Link to="/billing">Billing</Link>
    </li>
    <li>
      <Link to="/news">News</Link>
    </li>
  </ul>
);

export default MainMenu;
