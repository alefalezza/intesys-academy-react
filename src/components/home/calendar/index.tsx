import { Overline } from "@material/react-typography";
import React, { Dispatch, SetStateAction } from "react";
import Appointments from "./appointments";
import CalendarTable from "./calendar_table";
import { appointments, IAppointmentList } from "./data";
import "./index.scss";
import { useDate } from "./lib";
import Summary from "./summary";

interface ICalendarContext {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  prevMonth: () => void;
  nextMonth: () => void;
}

export const CalendarContext: React.Context<
  ICalendarContext
> = React.createContext({
  date: new Date(),
  setDate: () => {},
  prevMonth: () => {},
  nextMonth: () => {}
});

export const AppointmentsContext: React.Context<
  IAppointmentList
> = React.createContext(appointments);

const Calendar: React.FunctionComponent = () => {
  const [date, setDate, prevMonth, nextMonth] = useDate(new Date());
  const calendarContextValue = {
    date,
    setDate,
    prevMonth,
    nextMonth
  };

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      <AppointmentsContext.Provider value={appointments}>
        <div className="calendar">
          <CalendarTable />
          <Overline>Appointments</Overline>
          <Appointments />
          <Overline>Summary</Overline>
          <Summary />
        </div>
      </AppointmentsContext.Provider>
    </CalendarContext.Provider>
  );
};

export default Calendar;
