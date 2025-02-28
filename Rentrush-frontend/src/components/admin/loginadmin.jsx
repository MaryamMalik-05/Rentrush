import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "../Navbar";

const Base_Url = import.meta.env.VITE_API_URL;

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${Base_Url}/api/login`,
        { email: email, password: password },
        { withCredentials: true }
      );
      const userRole = response.data.role;
      localStorage.setItem("token", response.data.token);

      if (userRole === "admin") {
        alert("Yahoo! Login Successful!");
        navigate("/admin");
      } else if (userRole === "client") {
        alert("Yahoo! Login Successful!");
        localStorage.setItem("name", response.data.name);
        navigate("/customer/Dashboard");
      } else if (userRole === "showroom") {
        alert("Welcome to Showroom!");
        navigate("/showroom/inventory");
      } else {
        alert("Role not recognized.");
        navigate("/login");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center background h-[calc(100vh-0px)]">
        <div className="w-screen max-w-md py-5 px-8 bg-gray-300 backdrop-blur-lg bg-white/30 border border-white/10 rounded-3xl shadow-lg">
          <div className="flex justify-center">
            <img src="/src/assets/logo.svg" className="-ml-4 p w-[200px]" alt="RentRush Logo" />
          </div>

          {/* Centered Admin Login Text */}
          <h2 className="pt-2 font-bold text-[35px] text-[#02073F] text-center">
            Admin Login
          </h2>

          <form className="mt-8 rounded mb-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-[#02073F] text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="you@example.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#02073F] text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            {/* Centered Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#C17D3C] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;