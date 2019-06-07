import moment from "moment";
import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { CalendarContext } from "..";
import { getAppointments } from "../../../../lib/store/appointments/actions";
import {
  IAppointment,
  IAppointmentList
} from "../../../../lib/store/appointments/types";
import { IStore } from "../../../../types/store";
import Appointment from "./appointment";
import "./index.scss";

interface IAppointmentsActions {
  appointments: IAppointmentList;
}

interface IAppointmentsDispatch {
  getAppointments: () => void;
}

interface IAppointments extends IAppointmentsActions, IAppointmentsDispatch {}

const Appointments: React.FunctionComponent<IAppointments> = ({
  appointments,
  getAppointments
}) => {
  const { date } = useContext(CalendarContext);
  const selectedDate = moment(date).format("YYYY-MM-DD");

  useEffect(() => {
    getAppointments();
  }, []);

  const list = appointments[selectedDate] || [];
  return (
    <div className="calendar__appointment_list">
      {list.map((appointment: IAppointment) => (
        <Appointment {...appointment} key={appointment.id} />
      ))}
    </div>
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
)(Appointments);
