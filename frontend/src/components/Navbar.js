import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState("https://via.placeholder.com/32");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gradient-to-r from-indigo-50 via-pink-50 to-blue-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-black
                    text-gray-900 dark:text-white 
                    px-7 py-4 flex justify-between items-center 
                    border-b-2 border-gray-400 dark:border-gray-500 
                    shadow-lg transition-colors duration-500 relative z-50">

      {/* Brand */}
      <motion.h1 
        className="flex items-center cursor-pointer tracking-wide"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="relative -top-1 text-5xl font-semibold italic 
                         tracking-tight scale-y-115
                         bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 
                         text-transparent bg-clip-text mr-0">
          S
        </span>
        <span className="text-4xl font-semibold 
                         bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
                         text-transparent bg-clip-text ml-0">
          killMatch
        </span>
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6 items-center">
        {/* Home */}
        <li>
          <Link to="/" className="px-4 py-2 font-semibold hover:text-purple-600 transition whitespace-nowrap">
            Home
          </Link>
        </li>

        {/* Resume Dropdown */}
        <li className="relative group">
          <button className="px-4 py-2 font-semibold hover:text-purple-600 transition flex items-center whitespace-nowrap">
            Resume <span className="ml-1 text-xs">▼</span>
          </button>
          <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border rounded-md shadow-lg hidden group-hover:block z-50">
            <Link to="/resume-analyzer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">Resume Analyzer</Link>
            <Link to="/resume-templates" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">Resume Templates</Link>
            <Link to="/resume-maker" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">Resume Maker</Link>
          </div>
        </li>

        {/* CV Dropdown */}
        <li className="relative group">
          <button className="px-4 py-2 font-semibold hover:text-purple-600 transition flex items-center whitespace-nowrap">
            CV <span className="ml-1 text-xs">▼</span>
          </button>
          <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border rounded-md shadow-lg hidden group-hover:block z-50">
            <Link to="/cv-analyzer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">CV Analyzer</Link>
            <Link to="/cv-templates" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">CV Templates</Link>
            <Link to="/cv-maker" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">CV Maker</Link>
          </div>
        </li>

        {/* Cover Letter Dropdown */}
        <li className="relative group">
          <button className="px-4 py-2 font-semibold hover:text-purple-600 transition flex items-center whitespace-nowrap">
            Cover Letter <span className="ml-1 text-xs">▼</span>
          </button>
          <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 border rounded-md shadow-lg hidden group-hover:block z-50">
            <Link to="/cover-resume" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">For Resume</Link>
            <Link to="/cover-cv" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">For CV</Link>
          </div>
        </li>

        {/* Settings */}
        <li>
          <Link to="/settings" className="px-4 py-2 font-semibold hover:text-purple-600 transition whitespace-nowrap">
            Settings
          </Link>
        </li>
      </ul>

      {/* Right Side Options */}
      <div className="flex items-center gap-4 relative">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 
                     text-gray-800 dark:text-yellow-300 
                     hover:bg-gray-300 dark:hover:bg-gray-600 
                     shadow-md transition-all duration-300"
        >
          {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
        </button>

        {/* Login/Profile */}
        {!isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="px-4 py-2 text-sm font-semibold rounded-md 
                       bg-gradient-to-r from-indigo-500 to-purple-600 
                       text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            Login
          </button>
        ) : (
          <div className="relative">
            <img
              src={userImage}
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-indigo-500 shadow-md cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 
                              border border-gray-300 dark:border-gray-600 
                              rounded-md shadow-lg py-2 z-50">
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">
                  Profile
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap">
                  Settings
                </Link>
                <button
                  onClick={() => { setIsLoggedIn(false); setDropdownOpen(false); }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 whitespace-nowrap"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
