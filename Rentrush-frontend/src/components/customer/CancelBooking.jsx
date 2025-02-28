import React, { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import Footer from "../Footer";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CancelBooking = () => {
  const [isCancelled, setIsCancelled] = useState(false);

  // Sample pre-filled booking details (Replace with actual data from API)
  const bookingDetails = {
    startDate: "2024-03-10",
    endDate: "2024-03-15",
    startTime: "10:00",
    endTime: "18:00",
  };

  // Handle Cancellation
  const handleCancel = () => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      setIsCancelled(true);
      toast.success("Booking successfully canceled!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Cancel Booking</h2>

          {isCancelled ? (
            <p className="text-green-600 text-center font-semibold">Booking has been canceled successfully.</p>
          ) : (
            <div className="space-y-4">
              {/* Rental Start Date (Read-only) */}
              <div>
                <label className="block text-gray-700 font-medium">Rental Start Date:</label>
                <div className="relative">
                  <input
                    type="date"
                    value={bookingDetails.startDate}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-200 text-gray-700 pr-10"
                  />
                  <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Rental End Date (Read-only) */}
              <div>
                <label className="block text-gray-700 font-medium">Rental End Date:</label>
                <div className="relative">
                  <input
                    type="date"
                    value={bookingDetails.endDate}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-200 text-gray-700 pr-10"
                  />
                  <Calendar className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Rental Start Time (Read-only) */}
              <div>
                <label className="block text-gray-700 font-medium">Rental Start Time:</label>
                <div className="relative">
                  <input
                    type="time"
                    value={bookingDetails.startTime}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-200 text-gray-700 pr-10"
                  />
                  <Clock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Rental End Time (Read-only) */}
              <div>
                <label className="block text-gray-700 font-medium">Rental End Time:</label>
                <div className="relative">
                  <input
                    type="time"
                    value={bookingDetails.endTime}
                    readOnly
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-200 text-gray-700 pr-10"
                  />
                  <Clock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              {/* Reason for Cancellation */}
              <div>
                <label className="block text-gray-700 font-medium">Reason for Cancellation:</label>
                <textarea
                  placeholder="Enter reason..."
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>
              </div>

              {/* Cancel Booking Button */}
              <button
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-red-700"
                onClick={handleCancel}
              >
                Cancel Booking
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CancelBooking;