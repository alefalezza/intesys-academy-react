import React from "react";
import "./breadcrumb.scss";

const Breadcrumb: React.FunctionComponent = props => (
  <div className='breadcrumb'>
    <ul>{props.children}</ul>
  </div>
);

export default Breadcrumb;
