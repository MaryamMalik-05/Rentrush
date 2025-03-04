import React, { useState } from 'react';
import { FiEdit2, FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Navbar from '../customer/Navbar';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    address: '123 Main St, City, Country',
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const inputAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <button
            onClick={handleEdit}
            className={`px-4 py-2 rounded transition duration-300 ease-in-out ${
              isEditing ? 'bg-purple-500 text-white' : 'bg-green-500 text-white'
            }`}
          >
            {isEditing ? 'Save' : 'Edit'} <FiEdit2 className="inline ml-2" />
          </button>
        </div>

        <div className="mt-6">
          <motion.div
            className="flex items-center mb-4"
            initial="hidden"
            animate="visible"
            variants={inputAnimation}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <FiUser className="mr-2" />
            <span className="font-bold mr-2">Name:</span>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="border rounded px-2 py-1 transition-all duration-300 ease-in-out"
              />
            ) : (
              <span>{user.name}</span>
            )}
          </motion.div>

          <motion.div
            className="flex items-center mb-4"
            initial="hidden"
            animate="visible"
            variants={inputAnimation}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <FiMail className="mr-2" />
            <span className="font-bold mr-2">Email:</span>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="border rounded px-2 py-1 transition-all duration-300 ease-in-out"
              />
            ) : (
              <span>{user.email}</span>
            )}
          </motion.div>

          <motion.div
            className="flex items-center mb-4"
            initial="hidden"
            animate="visible"
            variants={inputAnimation}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FiPhone className="mr-2" />
            <span className="font-bold mr-2">Phone:</span>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="border rounded px-2 py-1 transition-all duration-300 ease-in-out"
              />
            ) : (
              <span>{user.phone}</span>
            )}
          </motion.div>

          <motion.div
            className="flex items-center mb-4"
            initial="hidden"
            animate="visible"
            variants={inputAnimation}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <FiMapPin className="mr-2" />
            <span className="font-bold mr-2">Address:</span>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                className="border rounded px-2 py-1 transition-all duration-300 ease-in-out"
              />
            ) : (
              <span>{user.address}</span>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default UserProfile;
