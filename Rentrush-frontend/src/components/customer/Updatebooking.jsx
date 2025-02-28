import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "../Footer";

const UpdateBooking = () => {
  const navigate = useNavigate();
  const { bookingId } = useParams(); // Get booking ID from URL params
  const [bookingData, setBookingData] = useState({
    rentalStartDate: "",
    rentalEndDate: "",
    rentalStartTime: "",
    rentalEndTime: "",
    carImage: "", // Car ki image URL yahan store hogi
  });

  // Fetch existing booking details including car image
  useEffect(() => {
    const fetchBookingDetails = async () => {
      try {
        const response = await fetch(`https://your-api.com/bookings/${bookingId}`);
        const data = await response.json();
        setBookingData(data);
      } catch (error) {
        console.error("Error fetching booking:", error);
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

      toast.success("Booking Updated Successfully!");
      setTimeout(() => navigate("/bookings"), 2000);
    } catch (error) {
      console.error("Error updating booking:", error);
      toast.error("Failed to update booking.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Booking</h2>

        {/* Car Image Display */}
        {bookingData.carImage && (
          <div className="flex justify-center mb-4">
            <img
              src={bookingData.carImage}
              alt="Car"
              className="w-64 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        <form onSubmit={handleUpdate} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Rental Start Date:</span>
            <input
              type="date"
              name="rentalStartDate"
              value={bookingData.rentalStartDate}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Rental End Date:</span>
            <input
              type="date"
              name="rentalEndDate"
              value={bookingData.rentalEndDate}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Rental Start Time:</span>
            <input
              type="time"
              name="rentalStartTime"
              value={bookingData.rentalStartTime}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Rental End Time:</span>
            <input
              type="time"
              name="rentalEndTime"
              value={bookingData.rentalEndTime}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded mt-2"
          >
            Update Booking
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateBooking;