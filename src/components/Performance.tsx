import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

const data = [{ value: 78 }];

const Performance = () => {
  return (
    <div className="rounded-lg p-4 w-80 flex flex-col items-center">
      <ResponsiveContainer width={250} height={150}>
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background  dataKey="value" fill="#007bff" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="text-center mt-2 relative">
      <div className="absolute text-center bottom-[170px] left-[100px]">
        <p className="text-3xl font-bold text-gray-900">78</p>
        <p className="text-gray-500 text-sm">of 100 points</p>
        </div>
         <div className="text-start">
        <p className="font-semibold text-lg mt-2 text-gray-900">You&apos;re good!</p>
        <p className="text-sm text-gray-500 mt-2">
          Your sales performance score is better than 80% of other users
        </p>
        <button className="mt-4 px-4 py-2  text-black text-sm font-medium rounded-full border outline-gray-500 ">
          Improve your score
        </button>
        </div>
      </div>
    </div>
  );
};

export default Performance;
