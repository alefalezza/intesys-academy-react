import moment from "moment";
import React, { useContext } from "react";
import { CalendarContext } from "..";
import { isToday } from "../utils";
import "./selected_date.scss";

const SelectedDate: React.FunctionComponent = () => {
  const { date } = useContext(CalendarContext);
  return (
    <div className="calendar__selected_date">
      {isToday(date) ? (
        <div className="calendar__selected_date__is_today">Today</div>
      ) : null}
      <div className="calendar__selected_date__selected_date">
        {moment(date).format("MMMM D")}
        <br /> {moment(date).format("dddd")}
        <br /> {moment(date).format("YYYY")}
      </div>
    </div>
  );
};

export default SelectedDate;
