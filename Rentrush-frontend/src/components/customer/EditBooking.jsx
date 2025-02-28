import React, { useState } from 'react';
import Navbar from './Navbar';

const EditBookingModal = ({ booking, isOpen, onClose, onUpdate }) => {
  const [rentalStartDate, setRentalStartDate] = useState(booking.rentalStartDate);
  const [rentalEndDate, setRentalEndDate] = useState(booking.rentalEndDate);
  const [rentalStartTime, setRentalStartTime] = useState(booking.rentalStartTime);
  const [rentalEndTime, setRentalEndTime] = useState(booking.rentalEndTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBooking = {
      rentalStartDate,
      rentalEndDate,
      rentalStartTime,
      rentalEndTime,
    };
    await onUpdate(booking._id, updatedBooking);
    onClose(); // Close the modal after updating
  };

  if (!isOpen) return null;

  return (
    <>
    <Navbar/>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
    <h2 className="text-xl font-semibold mb-4">Edit Booking</h2>
    <form onSubmit={handleSubmit}>
      <label className="block mb-2">
        <span className="text-gray-700">Rental Start Date:</span>
        <input
          type="date"
          value={rentalStartDate}
          onChange={(e) => setRentalStartDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Rental End Date:</span>
        <input
          type="date"
          value={rentalEndDate}
          onChange={(e) => setRentalEndDate(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </label>
      <label className="block mb-2">
        <span className="text-gray-700">Rental Start Time:</span>
        <input
          type="time"
          value={rentalStartTime}
          onChange={(e) => setRentalStartTime(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Rental End Time:</span>
        <input
          type="time"
          value={rentalEndTime}
          onChange={(e) => setRentalEndTime(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-blue-600 transition"
        >
          Update Booking
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</div>
    </>
    
  );
};

export default EditBookingModal;