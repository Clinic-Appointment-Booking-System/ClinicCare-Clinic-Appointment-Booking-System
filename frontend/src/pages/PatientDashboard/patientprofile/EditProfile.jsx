import React, { useState } from "react";

const Editprofile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData({
      fullName: "",
      address: "",
      age: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#e6f0ff]">
      <div className="bg-[#cfe3ff] p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">Edit Patient Profile</h1>

        {/* Upload Image */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border border-gray-300 cursor-pointer">
            <span className="text-3xl text-gray-400">+</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Click to upload image</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4 text-left">
          <h2 className="font-semibold text-gray-800 mb-2 border-b border-gray-300 pb-1">
            Personal Details
          </h2>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter Your Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="+94 2561616"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
            />
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md shadow-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editprofile;
