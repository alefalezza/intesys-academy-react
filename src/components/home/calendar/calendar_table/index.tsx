import { Cell, Row } from "@material/react-layout-grid";
import React from "react";

interface ICalendarTable {
  childLeft?: React.ReactNode;
  childRight?: React.ReactNode;
}

const CalendarTable: React.FunctionComponent<ICalendarTable> = ({
  childLeft,
  childRight
}) => (
  <Row>
    <Cell columns={4} align="middle">
      {childLeft}
    </Cell>
    <Cell columns={8}>{childRight}</Cell>
  </Row>
);

export default CalendarTable;
