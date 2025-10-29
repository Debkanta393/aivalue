import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlink = [
    { title: "Home", link: "/" },
    { title: "Our Process", link: "/process" },
    { title: "Solutions", link: "/solutions" },
    { title: "About", link: "/about" },
    { title: "Resources", link: "/resources" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-16 h-16 md:w-20 md:h-20" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          {navlink.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="hover:text-[#cdb383] transition-colors duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="py-2 px-6 rounded border border-[#d2b886] text-[#d2b886] font-semibold hover:bg-[#fffaf0] transition-all duration-200">
            Contact Us
          </button>
          <button className="py-2 px-6 rounded bg-[#d2b886] text-white font-semibold hover:bg-[#c4a969] transition-all duration-200">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-inner transition-all duration-300 ${
          menuOpen ? "max-h-screen py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-gray-800 font-medium">
          {navlink.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#cdb383] transition-colors duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 mt-6">
          <button className="w-4/5 py-2 rounded border border-[#d2b886] text-[#d2b886] font-semibold hover:bg-[#fffaf0] transition-all duration-200">
            Contact Us
          </button>
          <button className="w-4/5 py-2 rounded bg-[#d2b886] text-white font-semibold hover:bg-[#c4a969] transition-all duration-200">
            Get Started Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
