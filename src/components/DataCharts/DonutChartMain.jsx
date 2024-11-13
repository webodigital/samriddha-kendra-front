import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ label1, label2 }) => {
  const data = {
    labels: [`${label1}                 `, `${label2}`],
    datasets: [
      {
        label: "Poll",
        data: [25, 75],
        backgroundColor: ["#D9D9D9", "#3D4CD8"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    responsive: true, // Creating a wider ring to match the image
    plugins: {
      legend: {
        display: true,
        align: "center",
        labels: {
          boxWidth: 25, // Increase the size of the legend point
          boxHeight: 12,
          padding: 5,
          font: {
            size: 14, // Adjusted font size for clarity
          },
          generateLabels: (chart) => {
            const data = chart.data;
            return data.labels.map((label, i) => ({
              text: label,
              fillStyle: data.datasets[0].backgroundColor[i],
              strokeStyle: data.datasets[0].backgroundColor[i],
              lineWidth: 0,
              borderRadius: 6, // Apply rounded corners to the box
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
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
};

export default DonutChart;
