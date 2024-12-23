import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ label1, label2, value1 = 0, value2 = 0 }) => {
  const data = {
    labels: [label1, label2],
    datasets: [
      {
        label: "EMI Breakdown",
        data: [value1, value2],
        backgroundColor: ["#D9D9D9", "#3D4CD8"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || "";
            let value = context.raw || 0;
            return ` ₹${value.toLocaleString()}`;
            //return `${label}: ₹${value.toLocaleString()}`;
          },
        },
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 25,
          boxHeight: 12,
          padding: 5,
          font: {
            size: 14,
          },
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: `${label}: ₹${data.datasets[0].data[i].toLocaleString()}`,
              fillStyle: data.datasets[0].backgroundColor[i],
              strokeStyle: data.datasets[0].backgroundColor[i],
              lineWidth: 0,
              borderRadius: 6,
              boxWidth: 20,
            }));
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="calculation-container mt-3 rounded-4">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
