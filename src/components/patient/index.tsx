import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";

const Patient: React.FunctionComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbEl>Patients</BreadcrumbEl>
        <BreadcrumbEl active>Name</BreadcrumbEl>
      </Breadcrumb>
    </div>
  );
};

export default Patient;
