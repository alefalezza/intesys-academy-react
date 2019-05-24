import Card from "@material/react-card";
import { Cell, Row } from "@material/react-layout-grid";
import { Overline } from "@material/react-typography";
import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";
import CallToActions from "./call_to_actions";
import "./index.scss";
import { materialList } from "./materials/data"; // tmp: data will be fetched from api
import MaterialList from "./materials/material_list";

const Home: React.FunctionComponent = () => {
  return (
    <div className="home">
      <Breadcrumb>
        <BreadcrumbEl>Home</BreadcrumbEl>
      </Breadcrumb>

      <CallToActions />

      <Row className="home__row home__main">
        <Cell columns={6}>
          <Overline>Materials are running out</Overline>
          <Card>
            <MaterialList {...materialList} />
          </Card>
        </Cell>
        <Cell columns={6}>
          <Overline>Calendar</Overline>
          <Card>Place calendar here</Card>
        </Cell>
      </Row>
    </div>
  );
};

export default Home;
