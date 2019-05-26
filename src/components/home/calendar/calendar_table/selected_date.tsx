import moment from "moment";
import React from "react";
import { isToday } from "../utils";
import "./selected_date.scss";

interface ISelectedDate {
  date: Date;
}

const SelectedDate: React.FunctionComponent<ISelectedDate> = ({ date }) => {
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
