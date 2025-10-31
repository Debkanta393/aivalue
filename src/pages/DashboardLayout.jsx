import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="bg-black text-white min-h-screen flex">
      {/* --- Fixed Sidebar --- */}
      <Sidebar active={active} onSelect={setActive} />

      {/* --- Right Section (Scrollable) --- */}
      <div className="flex flex-col flex-1 ml-0 md:ml-64 min-h-screen">
        <main className="flex-1 overflow-y-auto pt-16 md:pt-0 px-4 md:px-6">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
