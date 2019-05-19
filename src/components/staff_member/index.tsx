import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";

const StaffMember: React.FunctionComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbEl>Staff</BreadcrumbEl>
        <BreadcrumbEl active>Member</BreadcrumbEl>
      </Breadcrumb>
    </div>
  );
};

export default StaffMember;
