import React from "react";
import { Grid, Row, Cell } from "@material/react-layout-grid";
import "./layout.scss";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const Layout: React.FunctionComponent = props => (
  <div className='layout'>
    <Grid className='layout__no-margin'>
      <Row>
        <Cell columns={12}>
          <Header />
        </Cell>
      </Row>
      <Row>
        <Cell columns={12}>
          <Body>{props.children}</Body>
        </Cell>
      </Row>
      <Row>
        <Cell columns={12}>
          <Footer />
        </Cell>
      </Row>
    </Grid>
  </div>
);

export default Layout;
