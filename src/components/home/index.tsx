import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";
import { Row, Cell } from "@material/react-layout-grid";
import MaterialIcon from "@material/react-material-icon";
import "./index.scss";
import Button from "@material/react-button";

const Home: React.FunctionComponent = () => {
  return (
    <div className="home">
      <Breadcrumb>
        <BreadcrumbEl>Home</BreadcrumbEl>
      </Breadcrumb>
      <Row>
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
    </div>
  );
};

export default Home;
