import { Row, Cell } from "@material/react-layout-grid";
import React from "react";
import { IAppointment } from "../appointments_provider";

const Appointment: React.FunctionComponent<IAppointment> = ({
  hour,
  title,
  done
}) => (
  <Row className="calendar__appointment_list__item">
    <Cell columns={2} className="calendar__appointment_list__item__hour">
      {hour}
    </Cell>
    <Cell columns={8} className="calendar__appointment_list__item__title">
      {title}
    </Cell>
    <Cell columns={2} className="calendar__appointment_list__item__done">
      <input type="checkbox" checked={done} disabled />
    </Cell>
  </Row>
);

export default Appointment;
