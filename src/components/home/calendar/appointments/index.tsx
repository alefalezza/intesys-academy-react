import moment from "moment";
import React from "react";
import { IAppointment, IAppointmentList } from "../data";
import Appointment from "./appointment";
import "./index.scss";

interface IAppointments {
  date: Date;
  appointments: IAppointmentList;
}

const Appointments: React.FunctionComponent<IAppointments> = ({
  date,
  appointments
}) => {
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
