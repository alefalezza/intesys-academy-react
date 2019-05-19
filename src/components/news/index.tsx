import React from "react";
import Breadcrumb from "../breadcrumb/breadcrumb";
import BreadcrumbEl from "../breadcrumb/breadcrumb-el";

const News: React.FunctionComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbEl>News</BreadcrumbEl>
      </Breadcrumb>
    </div>
  );
};

export default News;
