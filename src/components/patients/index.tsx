import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";

const Patients: React.FunctionComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbEl>Patients</BreadcrumbEl>
      </Breadcrumb>
    </div>
  );
};

export default Patients;
