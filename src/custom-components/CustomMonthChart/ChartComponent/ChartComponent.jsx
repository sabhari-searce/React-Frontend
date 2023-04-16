import React from "react";
import Chart from "chart.js/auto";

const Utils = {
  months: ({ count }) =>
    Array.from({ length: count }, (_, i) => {
      const d = new Date();
      d.setMonth(d.getMonth() - count + i + 1);
      return d.toLocaleString("default", { month: "short" });
    }),
};

const LineChart = ({ chartData }) => {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // destroy the old chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      // destroy the chart instance when the component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

const ChartComponent = () => {
  const labels = Utils.months({ count: 9 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Others in category",
        data: [26350, 33968, 34678, 30789, 29789, 30001, 24789, 18905, 12904],
        fill: false,
        borderColor: "#f3c313",
        borderCapStyle: "round",
        tension: 0.4,
      },
      {
        label: "Shristhi Bhatia",
        data: [15345, 18968, 21678, 31789, 35989, 33945, 38450, 43905, 39904],
        fill: false,
        borderColor: "#14b2a1",
        borderCapStyle: "round",

        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{height:"260px"}}>
      <LineChart chartData={data} />
    </div>
  );
};

export default ChartComponent;
