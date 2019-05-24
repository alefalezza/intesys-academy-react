import Tab from "@material/react-tab";
import TabBar from "@material/react-tab-bar";
import React from "react";
import MaterialItem from "./material_item";
import { IMaterialItem, IMaterialList } from "./types";

interface IState {
  activeTab: number;
}

class MaterialList extends React.Component<IMaterialList, IState> {
  listMap: string[];

  constructor(props: IMaterialList) {
    super(props);
    this.state = { activeTab: 0 };
    this.listMap = ["drugs", "nursing"];
  }

  handleActiveTabUpdate = (activeTab: number) => {
    this.setState({ activeTab });
  };

  render() {
    const activeList = this.listMap[this.state.activeTab];
    const list: IMaterialItem[] = this.props[activeList];
    return (
      <React.Fragment>
        <TabBar
          className="drug_list__header"
          activeIndex={this.state.activeTab}
          handleActiveIndexUpdate={this.handleActiveTabUpdate}
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
  }
}

export default MaterialList;
