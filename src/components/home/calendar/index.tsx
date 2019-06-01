import { Overline } from "@material/react-typography";
import React, { Dispatch, useReducer } from "react";
import Appointments from "./appointments";
import AppointmentsProvider from "./appointments_provider";
import CalendarTable from "./calendar_table";
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

const Calendar: React.FunctionComponent = () => {
  const [date, dispatch] = useReducer(dateReducer, new Date());
  const calendarContextValue = {
    date,
    dispatch
  };

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      <AppointmentsProvider>
        <div className="calendar">
          <CalendarTable />
          <Overline>Appointments</Overline>
          <Appointments />
          <Overline>Summary</Overline>
          <Summary />
        </div>
      </AppointmentsProvider>
    </CalendarContext.Provider>
  );
};

export default Calendar;
