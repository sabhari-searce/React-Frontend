import { Tag } from "antd";
import "./CustomChartTab.css";
import CustomChartLeft from "./CustomChartLeft/CustomChartLeft";
import CustomChartRight from "./CustomChartRight/CustomChartRight";

const CustomChartTag = () => {
  return (
    <div className="tag-container">
      <Tag className="ChartTab" style={{ height: "73vh", width: "50%", marginRight: "25px" }}>
        <CustomChartLeft />
      </Tag>
      <Tag className="ChartTab" style={{ height: "73vh", width: "50%" }}>
        <CustomChartRight />
      </Tag>
    </div>
  );
};

export default CustomChartTag;
