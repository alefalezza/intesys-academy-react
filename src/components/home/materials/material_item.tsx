import { Button } from "@material/react-button";
import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import { IMaterialItem } from "./types";

const MaterialItem: React.FunctionComponent<IMaterialItem> = props => (
  <section className="drug_list__item">
    <Row>
      <Cell columns={12}>
        <h3>{props.name}</h3>
      </Cell>
    </Row>
    <Row>
      <Cell columns={4} align="middle" className="cell--center">
        <div className="drug_list__item__quantity">{props.quantity}</div>
        <div className="drug_list__item__caption">Vials remaining</div>
      </Cell>
      <Cell columns={4} align="middle" className="cell--center">
        <div className="drug_list__item__quantity">
          {props.weeksForRefueling}
        </div>
        <div className="drug_list__item__caption">
          weeks for the next refueling
        </div>
      </Cell>
      <Cell columns={4} align="middle" className="cell--center">
        <Button raised>Go to details</Button>
      </Cell>
    </Row>
  </section>
);

export default MaterialItem;
