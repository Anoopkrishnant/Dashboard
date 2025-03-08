import React, { useEffect, useState } from "react";

const FeedbackChart = () => {

    
  const feedbackData = [
    { label: "Negative", value: 12, color: "bg-red-300" },
    { label: "Neutral", value: 34, color: "bg-yellow-300" },
    { label: "Positive", value: 134, color: "bg-green-400" },
  ];
   
  // Calculate total feedback count
  const total = feedbackData.reduce((sum, item) => sum + item.value, 0);

  

  

  return (
    <div className="p-4  w-80">
      {/* Header */}
      <h3 className="text-sm text-gray-500">Community feedback</h3>
      <h2 className="text-lg font-semibold">Mostly positive</h2>

      {/* Progress Bar */}
      <div className="flex w-full h-2 rounded-full overflow-hidden my-2 bg-gray-200">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className={`${item.color} h-full`}
            style={{ width: `${(item.value / total) * 100}%` }}
          />
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between text-xs text-gray-600 mt-2">
        {feedbackData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>{item.label}</span>
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackChart;
