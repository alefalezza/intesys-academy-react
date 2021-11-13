import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import React, { useContext, useState } from "react";
import { MaterialContext } from "../../../lib/material-provider";
import MaterialItem from "./material_item";
import { IMaterialItem } from "./types";

const MaterialList: React.FunctionComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTabUpdate = (activeIndex: number) =>
    setActiveTab(activeIndex);

  const listMap = ["drugs", "nursing"];

  const activeList = listMap[activeTab];

  const materials = useContext(MaterialContext);

  const list: IMaterialItem[] = materials[activeList];

  return (
    <React.Fragment>
      <TabBar
        className="drug_list__header"
        activeIndex={activeTab}
        handleActiveIndexUpdate={handleActiveTabUpdate}
      >
        <Tab active>Running out drugs</Tab>
        <Tab>Running out nursing material</Tab>
      </TabBar>

      {list.map(item => (
        <MaterialItem {...item} key={item.id} />
      ))}

      <Tab className="drug_list__see_all_button">See all materials</Tab>
    </React.Fragment>
  );
};

export default MaterialList;
