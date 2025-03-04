import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const CancelBooking = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const bookingDetails = {
    bookingId: 1369,
    startDay: "March 5, 2025",
    endDay: "March 7, 2025",
    startTime: "10:00 AM",
    endTime: "03:00 PM",
    total: "1,500",
    status: "Confirmed",
  };

  const handleCancelClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmCancel = () => {
    setIsCancelled(true);
    setShowConfirm(false);
    toast.success("Booking successfully canceled!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleCloseModal = () => {
    setShowConfirm(false);
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto py-10">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Booking Cancellation
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-bold mb-4">Booking Details</h2>

          {/* Booking Details Table */}
          <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  Booking:
                </td>
                <td className="p-4">{bookingDetails.bookingId}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  Start Day:
                </td>
                <td className="p-4">{bookingDetails.startDay}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  End Day:
                </td>
                <td className="p-4">{bookingDetails.endDay}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  Start Time:
                </td>
                <td className="p-4">{bookingDetails.startTime}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  End Time:
                </td>
                <td className="p-4">{bookingDetails.endTime}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  Total:
                </td>
                <td className="p-4">{bookingDetails.total}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="p-4 font-medium text-gray-700 border-r border-gray-300">
                  Status:
                </td>
                <td className="p-4">{bookingDetails.status}</td>
              </tr>
            </tbody>
          </table>

          <AnimatePresence>
            {isCancelled ? (
              <motion.p
                className="text-green-600 text-center font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                Booking has been canceled successfully.
              </motion.p>
            ) : (
              <motion.button
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
                onClick={handleCancelClick}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                Cancel Booking
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {showConfirm && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-semibold mb-4">Confirm Cancellation</h3>
              <p className="mb-6">
                Are you sure you want to cancel the booking{" "}
                <span className="font-semibold">{bookingDetails.bookingId}</span>?
              </p>
              <div className="flex justify-end space-x-4">
                <motion.button
                  className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
                  onClick={handleCloseModal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Keep Booking
                </motion.button>
                <Link to='/customer/cars'><motion.button
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                  onClick={handleConfirmCancel}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel Booking
                </motion.button></Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer />
    </motion.div>
  );
};

export default CancelBooking;
