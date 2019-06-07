import moment from "moment";
import React, { useContext } from "react";
import { CalendarContext } from "..";
import {
  IAppointmentList,
  IAppointment
} from "../../../../lib/store/appointments/types";
import Appointment from "./appointment";
import "./index.scss";

interface IAppointments {
  appointments: IAppointmentList;
}

const Appointments: React.FunctionComponent<IAppointments> = ({
  appointments
}) => {
  const { date } = useContext(CalendarContext);
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
