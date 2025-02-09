import { React, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
const Conferences = () => {
  const { conference } = useContext(UserContext);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">
        Conferences
      </h1>
      <p className="text-lg text-center text-black-100 mt-2">
        A collection of conferences attended and presented.
      </p>

      {/* Conferences List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {conference.map((conference) => (
          <div
            key={conference._id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {conference.name}
              </h2>
              <p className="text-gray-700 mt-2">{conference.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                Date: {conference.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
