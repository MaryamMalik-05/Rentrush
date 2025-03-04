/*import { User, Calendar, LogOut, House } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [name, setname] = useState("");
  const [First_letter, setFirst_letter] = useState("");

  useEffect(() => {
    const Fetchemail = () => {
      try {
        const userdata = localStorage.getItem("name");
        if (userdata) {
          setname(userdata);
          setFirst_letter(userdata.charAt(0));
        }
      } catch (error) {
        console.error(error);
      }
    };
    Fetchemail();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-[80px] w-[100%]">
      <div className="mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo *//*}
        <div className="flex items-center">
          <Link to="/customer/dashboard">
            <img src="/src/assets/logo.svg" className="-ml-4 w-[150px] mt-[-5px]" />
          </Link>
        </div>

        {/* Center Navigation (Car and Showroom links) *//*}
        <div className="hidden md:flex space-x-10 text-gray-600">
          <Link to="/customer/cars" className="list-none cursor-pointer  hover:text-[#C17D3C] text-[18px] text-[#000000] opacity-60 hover:opacity-100 font-medium">
            Cars
          </Link>
          <Link to="/customer/showrooms" className="list-none cursor-pointer  hover:text-[#C17D3C] text-[18px] text-[#000000] opacity-60 hover:opacity-100 font-medium">
            Showrooms
          </Link>
        </div>

        {/* User Profile Dropdown *//*}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center space-x-3 hover:cursor-pointer p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow"
          >
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold">{First_letter}</span>
            </div>
            <span className="text-gray-700 font-medium pr-2">{name}</span>
          </div>

          {/* Dropdown Menu *//*}
          {isDropdownOpen && (
            <div className="absolute top-14 right-0 w-56 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100">
              <Link
                to="/customer/dashboard"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <House className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Home</span>
              </Link>
              <Link
                to="/customer/profile"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <User className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Profile</span>
              </Link>
              <Link
                to="/customer/bookings"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <Calendar className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Your Bookings</span>
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link
                to=""
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <LogOut className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/
import { User, Calendar, LogOut, House } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [name, setname] = useState("");
  const [First_letter, setFirst_letter] = useState("");

  useEffect(() => {
    const Fetchemail = () => {
      try {
        const userdata = localStorage.getItem("name");
        if (userdata) {
          setname(userdata);
          setFirst_letter(userdata.charAt(0));
        }
      } catch (error) {
        console.error(error);
      }
    };
    Fetchemail();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 h-[70px] flex justify-between items-center w-[100%]">
      <div className="mx-auto px-4 flex justify-between items-center w-[100%]">
        <div className="flex items-center">
          <Link to="/">
          <div className="flex items-center">
          <img
    src="/src/assets/logo.png"
    alt="Logo"
    className="-my-3 h-[80px] mr-2"
  />
  <h1 className="list-none cursor-pointer font-bold text-[30px] text-[#00004b]">RentRush</h1>
</div>
          </Link>
        </div>
        {/* Center Navigation (Car and Showroom links) */}
        <div className="hidden md:flex space-x-10 text-gray-600">
          <ScrollLink 
            to="cars-section" // Scroll to this section when clicked
            smooth={true} 
            duration={500} // Smooth scroll duration
            className="list-none cursor-pointer hover:text-[#C17D3C] text-[18px] text-[#000000] opacity-60 hover:opacity-100 font-medium"
          >
            Cars
          </ScrollLink>
          <ScrollLink 
            to="showroom-section" // Scroll to this section when clicked
            smooth={true} 
            duration={500} // Smooth scroll duration
            className="list-none cursor-pointer hover:text-[#C17D3C] text-[18px] text-[#000000] opacity-60 hover:opacity-100 font-medium"
          >
            Showrooms
          </ScrollLink>
        </div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center space-x-3 hover:cursor-pointer p-2 border border-gray-300 rounded-full hover:shadow-md transition-shadow"
          >
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg font-bold">{First_letter}</span>
            </div>
            <span className="text-gray-700 font-medium pr-2">{name}</span>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-14 right-0 w-56 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-100">
              <Link
                to="/customer/dashboard"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <House className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Home</span>
              </Link>
              <Link
                to="/customer/profile"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <User className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Profile</span>
              </Link>
              <Link
                to="/customer/bookings"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <Calendar className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Your Bookings</span>
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <LogOut className="mr-3 text-gray-600" size={18} />
                <span className="text-gray-700">Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;