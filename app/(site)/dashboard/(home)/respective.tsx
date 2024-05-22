"use client";
import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartPlot = () => {
  const data = [
    {
      name: "Jan",
      high: 4000,
      low: 2400,
      priority: 2000,
    },
    {
      name: "Feb",
      high: 5000,
      low: 1500,
      priority: 2000,
    },
    {
      name: "Mar",
      high: 6000,
      low: 3000,
      priority: 2000,
    },
    {
      name: "Apr",
      high: 6500,
      low: 4500,
      priority: 2000,
    },
    {
      name: "May",
      high: 7000,
      low: 2200,
      priority: 2000,
    },
    {
      name: "Jun",
      high: 8000,
      low: 3500,
      priority: 2000,
    },
    {
      name: "Jul",
      high: 7400,
      low: 5500,
      priority: 2000,
    },
    {
      name: "May",
      high: 7000,
      low: 2200,
      priority: 2000,
    },
    {
      name: "Jun",
      high: 8000,
      low: 3500,
      priority: 2000,
    },
    {
      name: "Jul",
      high: 7400,
      low: 5500,
      priority: 2000,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="horizontal">
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend />
          <Bar radius={[4, 4, 0, 0]} dataKey="high" fill="#000000" />
          <Bar radius={[4, 4, 0, 0]} dataKey="low" fill="#333333" />
          <Bar radius={[4, 4, 0, 0]} dataKey="priority" fill="#808080" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
