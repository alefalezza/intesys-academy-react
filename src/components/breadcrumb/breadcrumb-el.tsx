import React from "react";

export interface IBreadcrumbEl {
  active?: boolean;
}

const BreadcrumbEl: React.FunctionComponent<IBreadcrumbEl> = props => {
  const active = props.active && "breadcrumb_el--active";
  const className = ["breadcrumb_el", active].join(" ");
  return <li className={className}>{props.children}</li>;
};

export default BreadcrumbEl;
