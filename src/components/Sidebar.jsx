import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, CreditCard, LogOut, Menu, X } from "lucide-react";

const Sidebar = ({ active, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (item) => {
    onSelect(item);
    setIsOpen(false);
  };

  // Dynamically measure navbar height so sidebar starts below it
  useEffect(() => {
    const navbar = document.querySelector("header"); // assuming your navbar is inside <header>
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <>
      {/* --- Mobile Header (for Dashboard) --- */}
      <div
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-4 py-3"
        style={{ top: "90px" }}
      >
        <div className="text-white text-lg font-bold">My Dashboard</div>
        <button
          onClick={handleToggle}
          className="text-gray-300 hover:text-white transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* --- Overlay for mobile --- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}

      {/* --- Sidebar (Fixed on Left Below Navbar) --- */}
      <div
        className={`fixed left-0 w-64 bg-gray-950 border-r border-gray-800 flex flex-col z-40 transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        style={{
          top: navbarHeight, // start below navbar
          height: `calc(100vh - ${navbarHeight}px)`, // fill rest of the screen
        }}
      >
        {/* Title */}
        <div className="p-5 text-xl font-bold text-white border-b border-gray-800 hidden md:block">
          My Dashboard
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
          <Link
            to="/dashboard"
            onClick={() => handleSelect("dashboard")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              active === "dashboard"
                ? "bg-gradient-to-r from-[#e7d3a4] to-[#cdb383] text-black font-semibold"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <Home size={20} /> Dashboard
          </Link>

          <Link
            to="/dashboard/subscription"
            onClick={() => handleSelect("subscription")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
              active === "subscription"
                ? "bg-gradient-to-r from-[#e7d3a4] to-[#cdb383] text-black font-semibold"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <CreditCard size={20} /> Subscription
          </Link>
        </nav>

        {/* Logout */}
        <button className="flex items-center gap-3 px-4 py-3 border-t border-gray-800 text-gray-300 hover:bg-gray-800">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
