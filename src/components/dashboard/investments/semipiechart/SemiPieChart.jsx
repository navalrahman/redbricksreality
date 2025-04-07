import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [25, 25, 50], 
      backgroundColor: ["blue", "black", "red"], 
      hoverOffset: 4,
      borderWidth: 0, 
      cutout: "90%", 
      rotation: -90, 
      circumference: 180, 
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.raw}%`; 
        }
      }
    }
  }
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { width, height } = chart;
    const ctx = chart.ctx;
    ctx.restore();

    const textX = width / 2;
    const textY = height / 1.3; 

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "16px Arial";
    ctx.fillStyle = "#888";
    ctx.fillText("Last updated", textX, textY - 10);

    ctx.font = "bold 24px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText("Nov 24, 2024", textX, textY + 15);

    ctx.save();
  }
};

const SemiPieChart = () => {
  return (
    <div style={{ width: "300px", height: "250px", margin: "auto" }}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default SemiPieChart;
