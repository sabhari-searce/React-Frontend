import { Tag } from "antd";
import "./CustomMonthChart.css";
import ChartComponent from "./ChartComponent/ChartComponent";

const CustomMonthChart = () => {
  return (
    <div>
      <Tag className="grey-tag">
        <p className="ChartHeading">Follower Growth</p>
        <p className="ChartInfo">Last 9 months</p>
        <ChartComponent />
      </Tag>
    </div>
  );
};

export default CustomMonthChart;
