import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import './CustomChartRight.css'
import { InfoCircleOutlined } from "@ant-design/icons";



const data = {
  labels: ["Active", "Inactive"],
  datasets: [
    {
      label: "Active Follower Count",
      data: [75, 25],
      backgroundColor: ["#fac912", "#fef3c7"],
      hoverOffset: 4,
      borderWidth: 0,
      circumference: 360,
      weight: 10,
    //   cutoutPercentage: 70,
    },
  ],
};



const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const CustomChartRight = () => {
  return (
    <div className="chart-container">
      <div className="ContentChartI">
        <InfoCircleOutlined />
      </div>

      <Doughnut
        key={JSON.stringify(data)}
        data={data}
        options={options}
        className="chart"
        id="myChart"
      />
      <p style={{color:"white",fontSize:"medium"}}>Active Follower Count</p>
    </div>
  );
};

export default CustomChartRight;
