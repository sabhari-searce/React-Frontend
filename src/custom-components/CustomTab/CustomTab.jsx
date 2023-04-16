import { Tabs } from "antd";
import "./CustomTab.css";
import CustomTabTag from "./CustomTabTag";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `GENERAL`,
    children: <CustomTabTag />,
  },
  {
    key: "2",
    label: `AUDIENCE`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `PERFORMANCE`,
    children: `Content of Tab Pane 3`,
  },
  {
    key: "4",
    label: `BRAND AFFINITY`,
    children: `Content of Tab Pane 4`,
  },
];
const CustomTab = () => (
  <div className="OuterTab">
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="custom-tab-pane"
      tabBarStyle={{ color: "#5a5b5f", fontSize: "20px" }}
      activeTabClassName="active-tab"
    ></Tabs>
  </div>
);
export default CustomTab;
