import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", thisYear: 8000, lastYear: 3000 },
  { name: "Feb", thisYear: 11000, lastYear: 7500 },
  { name: "Mar", thisYear: 6000, lastYear: 4000 },
  { name: "Apr", thisYear: 20000, lastYear: 16000 },
  { name: "May", thisYear: 15000, lastYear: 9000 },
  { name: "Jun", thisYear: 5000, lastYear: 2500 },
];

const ComparisonChart = () => {
  return (
    <div className="p-4 ">
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          {/* X-Axis */}
          <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />

          {/* Y-Axis */}
          <YAxis
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value / 1000}k`}
            axisLine={false}
            tickLine={false}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <Tooltip />
          <Legend wrapperStyle={{ fill: "#0000", fontSize: "14px" }} />

          {/* Bars */}
          <Bar dataKey="thisYear" fill="#007bff" name="This Year" barSize={30} />
          <Bar dataKey="lastYear" fill="#99d6ff" name="Last Year" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
