import { Overline } from "@material/react-typography";
import React, { Dispatch, SetStateAction } from "react";
import Appointments from "./appointments";
import CalendarTable from "./calendar_table";
import { appointments, IAppointmentList } from "./data";
import "./index.scss";
import { useDate } from "./lib";
import Summary from "./summary";
import SelectedDate from "./calendar_table/selected_date";
import Header from "./calendar_table/header";
import Table from "./calendar_table/table";

const Calendar: React.FunctionComponent = () => {
  const [date, setDate, prevMonth, nextMonth] = useDate(new Date());

  return (
    <div className="calendar">
      <CalendarTable
        childLeft={<SelectedDate date={date} />}
        childRight={
          <React.Fragment>
            <Header {...{ date, nextMonth, prevMonth }} />
            <Table {...{ date, setDate }} />
          </React.Fragment>
        }
      />
      <Overline>Appointments</Overline>
      <Appointments {...{ date, appointments }} />
      <Overline>Summary</Overline>
      <Summary />
    </div>
  );
};

export default Calendar;
