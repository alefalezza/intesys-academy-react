import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import "./index.scss";

const Appointments: React.FunctionComponent = () => (
  <div className="calendar__appointment_list">
    <Row className="calendar__appointment_list__item">
      <Cell columns={2} className="calendar__appointment_list__item__hour">
        10.00
      </Cell>
      <Cell columns={8} className="calendar__appointment_list__item__title">
        Appointment title
      </Cell>
      <Cell columns={2} className="calendar__appointment_list__item__done">
        <input type="checkbox" checked={true} disabled />
      </Cell>
    </Row>
    <Row className="calendar__appointment_list__item">
      <Cell columns={2} className="calendar__appointment_list__item__hour">
        10.00
      </Cell>
      <Cell columns={8} className="calendar__appointment_list__item__title">
        Appointment title
      </Cell>
      <Cell columns={2} className="calendar__appointment_list__item__done">
        <input type="checkbox" checked={true} disabled />
      </Cell>
    </Row>
    <Row className="calendar__appointment_list__item">
      <Cell columns={2} className="calendar__appointment_list__item__hour">
        10.00
      </Cell>
      <Cell columns={8} className="calendar__appointment_list__item__title">
        Appointment title
      </Cell>
      <Cell columns={2} className="calendar__appointment_list__item__done">
        <input type="checkbox" checked={true} disabled />
      </Cell>
    </Row>
    <Row className="calendar__appointment_list__item">
      <Cell columns={2} className="calendar__appointment_list__item__hour">
        10.00
      </Cell>
      <Cell columns={8} className="calendar__appointment_list__item__title">
        Appointment title
      </Cell>
      <Cell columns={2} className="calendar__appointment_list__item__done">
        <input type="checkbox" checked={true} disabled />
      </Cell>
    </Row>
  </div>
);

export default Appointments;
