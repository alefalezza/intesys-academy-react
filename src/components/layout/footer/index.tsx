import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import "./index.scss";

const Footer: React.FunctionComponent = () => (
  <div className='layout-footer'>
    <Row>
      <Cell columns={12}>
        <div className='layout-footer-content'>
          <Row>
            <Cell columns={4}>
              Open Hospital è un progetto di ISF 2005 - 2016 ISF © Informatici
              senza frontiere - ONLUS Viale IV Novembre, 100 - 31100 Treviso -
              Italy C.F. 94106980264
            </Cell>
          </Row>
        </div>
      </Cell>
    </Row>
  </div>
);

export default Footer;
