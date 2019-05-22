import Button from "@material/react-button";
import Card from "@material/react-card";
import { Cell, Row } from "@material/react-layout-grid";
import MaterialIcon from "@material/react-material-icon";
import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import { Headline6, Overline } from "@material/react-typography";
import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";
import "./index.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className="home">
      <Breadcrumb>
        <BreadcrumbEl>Home</BreadcrumbEl>
      </Breadcrumb>

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

      <Row className="home__row home__main">
        <Cell columns={6}>
          <Overline>Materials are running out</Overline>
          <Card>
            <TabBar className="drug_list__header">
              <Tab active>Running out drugs</Tab>
              <Tab>Running out nursing material</Tab>
            </TabBar>
            <section className="drug_list__item">
              <Row>
                <Cell columns={12}>
                  <h3>Erotricimina</h3>
                </Cell>
              </Row>
              <Row>
                <Cell columns={4} align="middle" className="cell--center">
                  <div className="drug_list__item__quantity">150</div>
                  <div className="drug_list__item__caption">
                    Vials remaining
                  </div>
                </Cell>
                <Cell columns={4} align="middle" className="cell--center">
                  <div className="drug_list__item__quantity">4</div>
                  <div className="drug_list__item__caption">
                    weeks for the next refueling
                  </div>
                </Cell>
                <Cell columns={4} align="middle" className="cell--center">
                  <Button raised>Go to details</Button>
                </Cell>
              </Row>
            </section>
            <section className="drug_list__item">
              <Row>
                <Cell columns={12}>
                  <h3>Erotricimina</h3>
                </Cell>
              </Row>
              <Row>
                <Cell columns={4} align="middle" className="cell--center">
                  <div className="drug_list__item__quantity">150</div>
                  <div className="drug_list__item__caption">
                    Vials remaining
                  </div>
                </Cell>
                <Cell columns={4} align="middle" className="cell--center">
                  <div className="drug_list__item__quantity">4</div>
                  <div className="drug_list__item__caption">
                    weeks for the next refueling
                  </div>
                </Cell>
                <Cell columns={4} align="middle" className="cell--center">
                  <Button raised>Go to details</Button>
                </Cell>
              </Row>
            </section>
            <section className="drug_list__item">
              <Row>
                <Cell columns={12}>
                  <h3>Erotricimina</h3>
                </Cell>
              </Row>
              <Row>
                <Cell columns={4} align="middle" className="cell--center">
                  <div className="drug_list__item__quantity">150</div>
                  <div className="drug_list__item__caption">
                    Vials remaining
                  </div>
                </Cell>
                <Cell columns={4} align="middle" className="cell--center">
                  <div className="drug_list__item__quantity">4</div>
                  <div className="drug_list__item__caption">
                    weeks for the next refueling
                  </div>
                </Cell>
                <Cell columns={4} align="middle" className="cell--center">
                  <Button raised>Go to details</Button>
                </Cell>
              </Row>
            </section>
            <Tab className="drug_list__see_all_button">See all materials</Tab>
          </Card>
        </Cell>
        <Cell columns={6}>
          <Overline>Calendar</Overline>
          <Card>content</Card>
        </Cell>
      </Row>
    </div>
  );
};

export default Home;
