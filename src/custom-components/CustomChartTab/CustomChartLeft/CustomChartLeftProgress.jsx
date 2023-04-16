import { Progress } from "antd";
import "./CustomChartLeftProgress.css";

const CustomChartLeftProgress = (ProgressProp) => (
  <div className="progress-container">
    <div className="progress-label">
      <span>{ProgressProp.title}</span>
      <span>{ProgressProp.value}%</span>
    </div>
    <Progress
      percent={ProgressProp.value}
      strokeColor={{
        "0%": "#85D262",
        "100%": "#3B7F2E",
      }}
      strokeWidth={8}
      trailColor="#F1F1F1"
      strokeLinecap="round"
    />
  </div>
);
export default CustomChartLeftProgress;
