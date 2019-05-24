import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import React from "react";
import MaterialItem from "./material_item";
import { IMaterialList } from "./types";

const MaterialList: React.FunctionComponent<IMaterialList> = props => {
  return (
    <React.Fragment>
      <TabBar className="drug_list__header">
        <Tab active>Running out drugs</Tab>
        <Tab>Running out nursing material</Tab>
      </TabBar>

      {props.drugs.map(item => (
        <MaterialItem {...item} />
      ))}

      <Tab className="drug_list__see_all_button">See all materials</Tab>
    </React.Fragment>
  );
};

export default MaterialList;
