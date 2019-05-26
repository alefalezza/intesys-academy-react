import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import "./index.scss";

const Summary: React.FunctionComponent = () => (
  <div className="calendar__appointment_summary">
    <Row>
      <Cell columns={4}>-</Cell>
      <Cell columns={4}>-</Cell>
      <Cell columns={4}>-</Cell>
    </Row>
  </div>
);

export default Summary;
