import { Button } from "@material/react-button";
import { Cell, Row } from "@material/react-layout-grid";
import MaterialIcon from "@material/react-material-icon";
import React from "react";

const CallToActions: React.FunctionComponent = () => (
  <Row className="home__row home__call_to_actions">
    <Cell columns={6} className="home__main_button_cell--right">
      <Button className="home__main_button home__main_button--active">
        <MaterialIcon icon="add" />
        Register new patient
      </Button>
    </Cell>
    <Cell columns={6} className="home__main_button_cell--left">
      <Button className="home__main_button">
        <MaterialIcon icon="search" />
        Search for patients
      </Button>
    </Cell>
  </Row>
);

export default CallToActions;
