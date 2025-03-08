"use client";

import { useState, useEffect } from "react";
import AttendanceChart from "@/components/AttendanceChart";
import Performance from "@/components/Performance";
import CustomersByDevice from "@/components/CustomersByDevice";
import FeedbackChart from "@/components/Feedback";
import TopProductsTable from "@/components/Table";
import StatsOverview from "@/components/StartCard";
import PuffLoader from "react-spinners/PuffLoader"; 

const AdminPage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PuffLoader size={50} color={"#007BFF"} loading={loading}/>
        
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-2 bg-gray-100 min-h-screen">
      {/* LEFT PANEL */}
      <div className="w-full flex flex-col gap-4 bg-white shadow-md rounded-xl mr-4">
        {/* HEADER */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex gap-4">
            <span className="px-4 py-2 text-gray-700 rounded-lg">Compare to</span>
            {/* Dropdown */}
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="text-xs px-1 py-1 border border-gray-300 rounded-2xl focus:outline-none"
            >
              <option value="option1">Last year</option>
              <option value="option2">This year</option>
            </select>
          </div>
        </div>

        {/* STAT OVERVIEW CARDS */}
        <div className="p-2 pr-6 pl-6 w-full">
          <StatsOverview />
        </div>

        {/* COMPARISON CHART */}
        <div className="rounded-xl p-2 pr-6 pl-6">
          <div className="flex justify-between gap-4">
            <h3 className="text-lg font-semibold pb-4">Comparison</h3>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="text-xs px-1  border border-gray-300 rounded-2xl focus:outline-none"
            >
              <option value="option1">6 months</option>
              <option value="option2">12 months</option>
            </select>
          </div>
          <AttendanceChart />
        </div>

        {/* TOP PRODUCTS TABLE */}
        <div className="bg-white shadow-md rounded-xl p-2 pr-6 pl-6">
          <div className="flex justify-between gap-4">
            <h3 className="text-lg font-semibold pb-4">Top Products</h3>
            <button className="text-xs px-1 border border-gray-300 rounded-2xl focus:outline-none">
              Full result
            </button>
          </div>
          <TopProductsTable />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <div className="bg-white shadow-md rounded-xl p-2">
          <Performance />
        </div>
        <div className="bg-white shadow-md rounded-xl p-2">
          <CustomersByDevice />
        </div>
        <div className="bg-white shadow-md rounded-xl p-2">
          <FeedbackChart />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
