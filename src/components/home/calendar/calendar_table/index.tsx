import { Cell, Row } from "@material/react-layout-grid";
import React, { Dispatch, SetStateAction } from "react";
import Header from "./header";
import SelectedDate from "./selected_date";
import Table from "./table";

interface ICalendarTable {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  prevMonth: () => void;
  nextMonth: () => void;
}

const CalendarTable: React.FunctionComponent<ICalendarTable> = ({
  date,
  setDate,
  nextMonth,
  prevMonth
}) => (
  <Row>
    <Cell columns={4} align="middle">
      <SelectedDate date={date} />
    </Cell>
    <Cell columns={8}>
      <Header {...{ date, nextMonth, prevMonth }} />
      <Table {...{ date, setDate }} />
    </Cell>
  </Row>
);

export default CalendarTable;
