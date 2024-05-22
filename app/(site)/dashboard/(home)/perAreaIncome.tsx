// import React from 'react';
// import { Progress } from "@/components/ui/progress";

// const ProgressBars = () => {
//   // Sample data for progress bars
//   const progressData = [
//     { name: 'Progress 1', percent: 40 },
//     { name: 'Progress 2', percent: 20 },
//     { name: 'Progress 3', percent: 30 },
//     { name: 'Progress 4', percent: 40 },
//     { name: 'Progress 5', percent: 50 },
//     { name: 'Progress 6', percent: 60 },
//     { name: 'Progress 7', percent: 70 },
//     { name: 'Progress 8', percent: 80 },
//     { name: 'Progress 9', percent: 90 },
//     { name: 'Progress 10', percent: 100 }
//   ];

//   return (
//     <div className='px-4'>
//       {progressData.map((item, index) => (
//         <div key={index} className='md:flex justify-around items-center'>
//           <p>{item.name}</p>
//           <Progress value={item.percent} className='max-w-[800px] my-3'/>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProgressBars;

"use client";
// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const ProgressBars = () => {
//   // Sample data
//   const data = [
//     { name: "A", x: 30, y: 70 },
//     { name: "B", x: 12, y: 88 },
//     { name: "C", x: 15, y: 85 },
//     { name: "D", x: 35, y: 65 },
//     { name: "E", x: 54, y: 46 },
//     { name: "F", x: 72, y: 28 },
//     { name: "G", x: 32, y: 68 },
//   ];

//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <BarChart data={data}>
//         <CartesianGrid />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar
//           dataKey="x"
//           fill="currentColor"
//           radius={[4, 4, 0, 0]}
//           stackId="a"
//           className="fill-primary"
//         />
// <Bar
//   dataKey="y"
//   fill="#007bff" // Change the fill color to blue
//   stackId="a"
//   radius={[4, 4, 0, 0]}
//   className="fill-gray"
// />

//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default ProgressBars;
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HorizontalBarChart = () => {
  const data = {
    labels: [
      "Manjar Wali",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Manjar Wali hav",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
    ],
    datasets: [
      {
        data: [10, 30, 50, 5, 15, 10, 30, 50, 5, 15],
        backgroundColor: "#000000",
        borderRadius: 5,
        // barThickness: 35,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // Correctly specify indexAxis as 'y'
    plugins: {
      legend: {
        display: false, // Hides legend
      },
      tooltip: {
        enabled: false, // Disables tooltip
      },
    },
    scales: {
      x: {
        display: true, // Displays x-axis
        grid: {
          display: false, // Hides x-axis grid lines
        },
        // ticks: {
        //   display: false, // Hides x-axis ticks
        // },
        drawBorder: false, // Hides x-axis border
      },
      y: {
        display: true, // Displays y-axis
        grid: {
          display: false, // Hides y-axis grid lines
        },
        // ticks: {
        //   display: false, // Hides y-axis ticks
        // },
        drawBorder: false, // Hides y-axis border
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default HorizontalBarChart;
