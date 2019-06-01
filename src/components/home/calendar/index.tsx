import { Overline } from "@material/react-typography";
import React, { Dispatch, useReducer } from "react";
import Appointments from "./appointments";
import CalendarTable from "./calendar_table";
import { appointments, IAppointmentList } from "./data";
import "./index.scss";
import { Action, dateReducer } from "./lib";
import Summary from "./summary";

interface ICalendarContext {
  date: Date;
  dispatch: Dispatch<Action>;
}

export const CalendarContext: React.Context<
  ICalendarContext
> = React.createContext({
  date: new Date(),
  dispatch: () => {}
});

export const AppointmentsContext: React.Context<
  IAppointmentList
> = React.createContext(appointments);

const Calendar: React.FunctionComponent = () => {
  const [date, dispatch] = useReducer(dateReducer, new Date());
  const calendarContextValue = {
    date,
    dispatch
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
