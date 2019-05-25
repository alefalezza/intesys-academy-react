import moment from "moment";
import React, { useContext } from "react";
import { AppointmentsContext, CalendarContext } from "..";
import { IAppointment } from "../data";
import Appointment from "./appointment";
import "./index.scss";

const Appointments: React.FunctionComponent = () => {
  const { date } = useContext(CalendarContext);
  const appointments = useContext(AppointmentsContext);
  const selectedDate = moment(date).format("YYYY-MM-DD");
  const list = appointments[selectedDate] || [];
  return (
    <div className="calendar__appointment_list">
      {list.map((appointment: IAppointment) => (
        <Appointment {...appointment} key={appointment.id} />
      ))}
    </div>
  );
};

export default Appointments;
