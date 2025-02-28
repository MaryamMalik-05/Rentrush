/*import React from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";

function ShowroomNavbar({ onMenuClick }) {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/showroom/dashboard">
            <img
              src="/src/assets/logo.svg"
              alt="Logo"
              className="-my-3 h-[100px] mr-2"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex space-x-4 justify-center items-center">
            
            <button onClick={onMenuClick}>
              <AlignJustify />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ShowroomNavbar;*/
import React from "react";
import { Link } from "react-router-dom";

function ShowroomNavbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 p-2">
      <div className="mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/showroom/inventory">
            <img
              src="/src/assets/logo.svg"
              alt="Logo"
              className="-my-3 h-[77px] mr-2 "
            />
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="flex space-x-6 justify-center items-center flex-grow">
          <Link
            to="/showroom/dashboard"
            className="text-[18px] text-[#000000] opacity-60 hover:opacity-100 cursor-pointer font-medium hover:text-[#C17D3C] list-none"
          >
            Home
          </Link>
          <Link
            to="/showroom/inventory"
            className="text-[18px] text-[#000000] opacity-60 hover:opacity-100 cursor-pointer font-medium hover:text-[#C17D3C] list-none"
          >
            Inventory
          </Link>
          <Link
            to="/showroom/maintenance"
            className="text-[18px] text-[#000000] opacity-60 hover:opacity-100 cursor-pointer font-medium hover:text-[#C17D3C] list-none"
          >
            Maintenance
          </Link>
        </div>

        {/* Signout Button */}
        <Link
          to="/"
          className="bg-primary text-white px-6 py-2 rounded-md text-[18px] font-medium opacity-60 hover:opacity-100 cursor-pointer"
        >
          Logout
        </Link>
        
      </div>
    </nav>
  );
}

export default ShowroomNavbar;