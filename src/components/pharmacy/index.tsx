import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";

const Pharmacy: React.FunctionComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbEl>Pharmacy</BreadcrumbEl>
      </Breadcrumb>
    </div>
  );
};

export default Pharmacy;
