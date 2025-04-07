// import React from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// // Register required Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
// //   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [300, 50, 100],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)"
//       ],
//       hoverOffset: 4
//     }
//   ]
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top"
//     }
//   }
// };

// const PieChartComponent = () => {
//   return <Pie data={data} options={options} />;
// };

// export default PieChartComponent;


import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Pie chart data
const data = {
    datasets: [
        {
            data: [40, 25, 35], // 80% and remaining part
            backgroundColor: ["red","blue", "green"], // Green and Gray
            hoverOffset: 4,
            borderWidth: 0, // Remove borders
            cutout: "70%", // Makes it a ring (donut-style)
        }
    ]
};

// Options with custom center text plugin
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false // Hide default legend
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.raw}%`; // Show percentage in tooltip
                }
            }
        }
    }
};

// Custom Plugin to add center text
const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
        const { width, height } = chart;
        const ctx = chart.ctx;
        ctx.restore();

        // Text styles
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Title Text (Small)
        ctx.font = "16px Arial";
        ctx.fillStyle = "#888";
        ctx.fillText("Total Fund", width / 2, height / 2 - 10);

        // Value Text (Bold)
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "#000";
        ctx.fillText("3,80K", width / 2, height / 2 + 15);

        ctx.save();
    }
};

const PieChartComponent = () => {
    return (
        <div style={{ position: "relative", width: "250px", margin: "auto" }}>
            <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
        </div>
    );
};

export default PieChartComponent;
