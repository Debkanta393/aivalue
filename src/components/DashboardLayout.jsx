import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHome from "../pages/DashboardHome";
import Subscription from "../pages/Subscription";
import Footer from "./Footer";
import SubscriptionDetails from "../pages/SubscriptionDetails";

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
            <Route path="subscription/:id" element={<SubscriptionDetails />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
