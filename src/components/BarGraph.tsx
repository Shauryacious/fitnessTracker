import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarGraph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // This will disable the tooltip
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 20, // This will create 5 ticks from 0 to 100
          callback: function (value, index, values) {
            return `${value}%`;
          },
          color: "white",
        },
      },
    },
    axis: {
      x: {
        display: false,
      },
    },
  };
  const data = {
    labels: ["28/4", "30/4", "02/5", "05/5", "11/5", "15/5", "16/5", "22/5"],
    datasets: [
      {
        label: "Demo Bar Graph",
        data: [92, 100, 98, 90, 84, 82, 80, 80],
        backgroundColor: ["#5A92CB"],
        barPercentage: 0.55,
        borderRadius: 1,
      },
    ],
  };

  return (
    // <div className="h-64 w-96 border border-black m-10">
    <Bar data={data} options={options} />
  );
}

export default BarGraph;
