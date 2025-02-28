/*import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import ShowroomSignUp from "./components/showroom/signup.jsx"
import ShowroomDashboard from "./components/showroom/dashboard.jsx";
import ShowroomInventory from "./components/showroom/inventory.jsx"
import LandingPage from "./components/landingPage.jsx";
import CarsDashboard from "./components/customer/Dashboard.jsx";
import UserProfile from "./components/customer/profile.jsx";
import Cars from  "./components/customer/cars.jsx";
import Showrooms from "./components/customer/showrooms.jsx";
import Bookings from "./components/customer/bookings.jsx";
import Adminpage from "./components/admin/Adminpage.jsx";
import ProtectedLayout from "./auth/protectedRoute.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/showroom/signup" element={<ShowroomSignUp />}></Route>
          <Route path="/" element={<LandingPage />}></Route>

          {/* Protected Routes *//*}
          <Route element={<ProtectedLayout />}>
            <Route
              path="/showroom/Dashboard"
              element={<ShowroomDashboard />}
            ></Route>
            <Route
              path="/showroom/inventory"
              element={<ShowroomInventory />}
            ></Route>
            <Route
              path="/customer/Dashboard"
              element={<CarsDashboard />}
            ></Route>
            <Route path="/customer/profile" element={<UserProfile />}></Route>
            <Route path="/customer/cars" element={<Cars />}></Route>
            <Route path="/customer/Showrooms" element={<Showrooms />}></Route>
            <Route path="/customer/bookings" element={<Bookings />}></Route>
            <Route path="/admin" element={<Adminpage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import ShowroomSignUp from "./components/showroom/signup.jsx"
import ShowroomDashboard from "./components/showroom/dashboard.jsx";
import ShowroomInventory from "./components/showroom/inventory.jsx"
import LandingPage from "./components/landingPage.jsx";
import CarsDashboard from "./components/customer/Dashboard.jsx";
import UserProfile from "./components/customer/profile.jsx";
import Cars from  "./components/customer/cars.jsx";
import Showrooms from "./components/customer/showrooms.jsx";
import Bookings from "./components/customer/bookings.jsx";
import Adminpage from "./components/admin/Adminpage.jsx";
import ProtectedLayout from "./auth/protectedRoute.jsx";
import Maintenance from "./components/showroom/maintenance.jsx";
import Loginadmin from "./components/admin/loginadmin.jsx";
import Forgetpassword from "./components/forgetpassword.jsx";
import Updatebooking from './components/customer/Carbooking.jsx'
import Updatebooking1 from './components/customer/Updatebooking.jsx'
import CancelBooking from './components/customer/CancelBooking.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/showroom/signup" element={<ShowroomSignUp />}></Route>
          <Route path="/" element={<LandingPage />}></Route>

          {/* Protected Routes */}
          <Route element={<ProtectedLayout />}>
            <Route
              path="/showroom/Dashboard"
              element={<ShowroomDashboard />}
            ></Route>
            <Route
              path="/showroom/inventory"
              element={<ShowroomInventory />}
            ></Route>
            <Route
              path="/customer/Dashboard"
              element={<CarsDashboard />}
            ></Route>
             <Route
              path="/customer/updatebooking"
              element={<Updatebooking1/>}
            ></Route>
            <Route path="/customer/profile" element={<UserProfile />}></Route>
            <Route path="/customer/cars" element={<Cars />}></Route>
            <Route path="/customer/Showrooms" element={<Showrooms />}></Route>
            <Route path="/customer/bookings" element={<Bookings />}></Route>
            <Route path="/admin" element={<Adminpage />}></Route>
            <Route path="/admin/login" element={<Loginadmin/>}></Route>
            <Route path="/showroom/maintenance" element={<Maintenance/>}></Route>
            <Route path="/forgetpassword" element={<Forgetpassword/>}></Route>
            <Route path="/updatebooking" element={<Updatebooking/>}></Route>
            <Route path="/updatebooking1" element={<Updatebooking1/>}></Route>
            <Route path="/cancelbooking" element={<CancelBooking />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;