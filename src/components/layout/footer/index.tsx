import { Cell, Row } from "@material/react-layout-grid";
import React from "react";
import "./index.scss";
import informatici from "../../../assets/informatici_senza_frontiere.png";

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
            <Cell columns={8} className='layout-footer__logo-informatici'>
              <img src={informatici} />
            </Cell>
          </Row>
        </div>
      </Cell>
    </Row>
  </div>
);

export default Footer;
