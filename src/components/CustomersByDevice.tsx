import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", webSales: 500, offlineSales: 200 },
  { name: "Feb", webSales: 1000, offlineSales: 500 },
  { name: "Mar", webSales: 2000, offlineSales: 1000 },
  { name: "Apr", webSales: 3000, offlineSales: 1500 },
  { name: "May", webSales: 5000, offlineSales: 2500 },
  { name: "Jun", webSales: 7000, offlineSales: 3000 },
  { name: "Jul", webSales: 8000, offlineSales: 3500 },
];

const CustomersByDevice = () => {
  return (
    <div className="p-2  w-72">
      <h3 className="text-md font-semibold mb-2">Customers by device</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: "#666" }} 
            axisLine={false} 
            tickLine={false} 
          />
          <YAxis 
            tick={{ fontSize: 12, fill: "#666" }} 
            tickFormatter={(value) => `${value / 1000}k`} 
            axisLine={false} 
            tickLine={false} 
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip />
          <Line type="monotone" dataKey="webSales" stroke="#007bff" strokeWidth={2} dot={false} name="Web sales" />
          <Line type="monotone" dataKey="offlineSales" stroke="#99d6ff" strokeWidth={2} dot={false} name="Offline selling" />
        </LineChart>
      </ResponsiveContainer>
      <div className=" flex justify-around mt-4 text-sm">
      <div className=" flex flex-col">
        <div className=" flex items-center gap-4  text-sm">
        <span>Web sales</span>
          <span className="inline-block w-3 h-3 bg-blue-500  mr-1"></span>
        </div>
        <p className="font-bold text-lg">1,304%</p>
        </div>
        <div className=" flex flex-col">
        <div className=" flex items-center gap-4 p-2 ">
        <span>Offline selling</span>
          <span className="inline-block w-3 h-3 bg-blue-300  mr-1"></span>
        </div>
        <p className="font-bold text-lg">473%</p>
        </div>
      </div>
    </div>
  );
};

export default CustomersByDevice;
