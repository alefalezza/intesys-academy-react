import moment from "moment";
import React, { useContext } from "react";
import { CalendarContext } from "..";
import Appointment from "./appointment";
import "./index.scss";
import { AppointmentsContext, IAppointment } from "../appointments_provider";

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
