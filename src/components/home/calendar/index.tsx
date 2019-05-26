import { Overline } from "@material/react-typography";
import React from "react";
import Appointments from "./appointments";
import CalendarTable from "./calendar_table";
import { appointments, IAppointmentList } from "./data";
import "./index.scss";
import { useDate } from "./lib";
import Summary from "./summary";

export const AppointmentsContext: React.Context<
  IAppointmentList
> = React.createContext(appointments);

const Calendar: React.FunctionComponent = () => {
  const [date, setDate, prevMonth, nextMonth] = useDate(new Date());

  return (
    <div className="calendar">
      <CalendarTable {...{ date, setDate, nextMonth, prevMonth }} />
      <Overline>Appointments</Overline>
      <Appointments date={date} appointments={appointments} />
      <Overline>Summary</Overline>
      <Summary />
    </div>
  );
};

export default Calendar;
