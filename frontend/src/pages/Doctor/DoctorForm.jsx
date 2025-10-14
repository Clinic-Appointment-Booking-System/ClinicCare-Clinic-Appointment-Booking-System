import { useState } from "react";


function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#cce1ff] flex justify-center items-center py-10">
      <div className="w-[90%] max-w-lg bg-[#cce4ff] border-2 border-blue-500 rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          Add New Doctor
        </h1>

     
        <div className="text-center mb-6">
          <label htmlFor="file-upload" className="cursor-pointer">
            {image ? (
              <img
                src={image}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-400 mx-auto"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-[#e3ecff] border-2 border-gray-300 flex items-center justify-center mx-auto">
                <span className="text-3xl text-gray-500">+</span>
              </div>
            )}
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-sm text-gray-600 mt-2">Click to upload image</p>
        </div>

     
        <form className="flex flex-col space-y-3">
          <h3 className="text-base font-semibold mb-2">
            Personal & Professional Details
          </h3>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Full name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Specialization</label>
            <input
              type="text"
              placeholder="E.g:- Cardiologist"
              className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium">Experience (Years)</label>
              <input
                type="text"
                placeholder="E.g :- 10"
                className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium">Phone</label>
              <input
                type="text"
                placeholder="+94 2561616"
                className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Availability</label>
            <input
              type="text"
              placeholder="Mon-Fri , 9AM-3PM"
              className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">About Doctor</label>
            <input
              type="text"
              placeholder="Short description about the doctor"
              className="p-2 rounded-md border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          
          <div className="flex justify-center flex-col sm:flex-row gap-5 mt-5">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-lg transition"
            >
              Save Doctor
            </button>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
