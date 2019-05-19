import { Cell, Row } from "@material/react-layout-grid";
import TextField, { Input } from "@material/react-text-field";
import React from "react";
import "./index.scss";

const Body: React.FunctionComponent = props => (
  <div className='layout-body'>
    <Row>
      <Cell>
        {props.children}
        <TextField label='Name'>
          <Input value='' />
        </TextField>
      </Cell>
    </Row>
  </div>
);

export default Body;
