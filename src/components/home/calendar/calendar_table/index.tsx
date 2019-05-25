import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import Header from "./header";
import SelectedDate from "./selected_date";
import Table from "./table";

const CalendarTable: React.FunctionComponent = () => (
  <Row>
    <Cell columns={4} align="middle">
      <SelectedDate />
    </Cell>
    <Cell columns={8}>
      <Header />
      <Table />
    </Cell>
  </Row>
);

export default CalendarTable;
