import React, { useContext } from "react";
import { CalendarContext } from "..";
import { week_subs } from "../utils";
import { CalendarTableData, IDay } from "./lib";
import "./table.scss";

const Table: React.FunctionComponent = () => {
  const { date, setDate } = useContext(CalendarContext);
  const calendar = new CalendarTableData(date);

  const Day: React.FunctionComponent<{ day: IDay }> = ({ day }) => {
    if (day.num === null) {
      return null;
    }
    const className = day.isToday ? "today" : "";

    const handleClick = () => {
      day.fullDate && setDate(day.fullDate);
    };

    return (
      <div className={className} onClick={handleClick}>
        {day.num}
      </div>
    );
  };

  const Week: React.FunctionComponent<{ days: IDay[] }> = ({ days }) => (
    <tr>
      {days.map((day: IDay, i) => (
        <td key={i}>
          <Day day={day} />
        </td>
      ))}
    </tr>
  );

  return (
    <div className="calendar__table">
      <table>
        <thead>
          <tr>
            {week_subs.map((d, i) => (
              <th key={i}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.table.map((weekDays, i) => (
            <Week key={i} days={weekDays} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
