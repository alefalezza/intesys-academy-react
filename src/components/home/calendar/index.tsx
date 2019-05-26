import { Overline } from "@material/react-typography";
import React from "react";
import Appointments from "./appointments";
import CalendarTable from "./calendar_table";
import "./index.scss";
import Summary from "./summary";

const Calendar: React.FunctionComponent = () => {
  return (
    <div className="calendar">
      <CalendarTable />
      <Overline>Appointments</Overline>
      <Appointments />
      <Overline>Summary</Overline>
      <Summary />
    </div>
  );
};

export default Calendar;
