import { Overline } from "@material/react-typography";
import React, { Dispatch, useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { getAppointments } from "../../../lib/store/appointments/actions";
import { IAppointmentList } from "../../../lib/store/appointments/types";
import { IStore } from "../../../types/store";
import Appointments from "./appointments";
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
  dispatch: action => {}
});

interface ICalendarActions {
  appointments: IAppointmentList;
}

interface ICalendarDispatch {
  getAppointments: () => void;
}

interface ICalendar extends ICalendarActions, ICalendarDispatch {}

const Calendar: React.FunctionComponent<ICalendar> = ({
  appointments,
  getAppointments
}) => {
  const [date, dispatch] = useReducer(dateReducer, new Date());
  const calendarContextValue = {
    date,
    dispatch
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <CalendarContext.Provider value={calendarContextValue}>
      <div className="calendar">
        <CalendarTable />
        <Overline>Appointments</Overline>
        <Appointments appointments={appointments} />
        <Overline>Summary</Overline>
        <Summary />
      </div>
    </CalendarContext.Provider>
  );
};

const mapStateToProps = (store: IStore) => ({
  appointments: store.appointments
});

const mapDispatchToProps = {
  getAppointments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
