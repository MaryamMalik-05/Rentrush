import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

const UpdateBooking = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const [bookingData, setBookingData] = useState({
    rentalStartDate: "",
    rentalEndDate: "",
    rentalStartTime: "",
    rentalEndTime: "",
    carImage: "",
  });

  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await fetch(`https://your-api.com/bookings/${bookingId}`);
        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        toast.error("Failed to fetch booking details.");
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (new Date(bookingData.rentalStartDate) > new Date(bookingData.rentalEndDate)) {
      toast.error("End date cannot be before start date!");
      return;
    }

    try {
      await fetch(`https://your-api.com/bookings/${bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      toast.success("Booking Updated Successfully!", { autoClose: 3000 });
      setTimeout(() => navigate("/bookings"), 2000);
    } catch (error) {
      toast.error("Failed to update booking.", { autoClose: 3000 });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          className="max-w-md w-full bg-white p-8 shadow-md rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            Update Your Booking
          </h2>

          {/* Car Image */}
          {bookingData.carImage && (
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={bookingData.carImage}
                alt="Car"
                className="w-full h-40 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          )}

          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rental Start Date
              </label>
              <input
                type="date"
                name="rentalStartDate"
                value={bookingData.rentalStartDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rental End Date
              </label>
              <input
                type="date"
                name="rentalEndDate"
                value={bookingData.rentalEndDate}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rental Start Time
              </label>
              <input
                type="time"
                name="rentalStartTime"
                value={bookingData.rentalStartTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rental End Time
              </label>
              <input
                type="time"
                name="rentalEndTime"
                value={bookingData.rentalEndTime}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition duration-300 ease-in-out focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Update Booking
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default UpdateBooking;
