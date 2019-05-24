import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import React, { useState } from "react";
import MaterialItem from "./material_item";
import { IMaterialList, IMaterialItem } from "./types";

const MaterialList: React.FunctionComponent<IMaterialList> = props => {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTabUpdate = (activeIndex: number) =>
    setActiveTab(activeIndex);

  const listMap = ["drugs", "nursing"];

  const activeList = listMap[activeTab];

  const list: IMaterialItem[] = props[activeList];

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
        <MaterialItem {...item} />
      ))}

      <Tab className="drug_list__see_all_button">See all materials</Tab>
    </React.Fragment>
  );
};

export default MaterialList;
