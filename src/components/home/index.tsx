import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbEl>Home</BreadcrumbEl>
      </Breadcrumb>
    </div>
  );
};

export default Home;
