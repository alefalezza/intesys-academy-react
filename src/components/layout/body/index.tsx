import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import "./index.scss";

const Body: React.FunctionComponent = props => (
  <div className="layout-body">
    <Row>
      <Cell columns={12}>{props.children}</Cell>
    </Row>
  </div>
);

export default Body;
