import { Button } from "@material/react-button";
import { Cell, Row } from "@material/react-layout-grid";
import MaterialIcon from "@material/react-material-icon";
import React, { useContext } from "react";
import { CalendarContext } from "..";
import { monthName } from "../utils";
import "./header.scss";

const Header: React.FunctionComponent = () => {
  const { date, dispatch } = useContext(CalendarContext);
  const prevMonth = () => dispatch({ type: "PREV_MONTH" });
  const nextMonth = () => dispatch({ type: "NEXT_MONTH" });
  return (
    <Row className="calendar__navigation">
      <Cell columns={6} className="calendar__navigation__date">
        {monthName(date)} {date.getFullYear()}
      </Cell>
      <Cell columns={6} className="calendar__navigation__buttons">
        <Button onClick={prevMonth}>
          <MaterialIcon icon="chevron_left" />
        </Button>
        <Button onClick={nextMonth}>
          <MaterialIcon icon="chevron_right" />
        </Button>
      </Cell>
    </Row>
  );
};

export default Header;
