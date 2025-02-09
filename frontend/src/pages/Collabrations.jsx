import React, { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Collaborations = () => {
  const { collaborators } = useContext(UserContext);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-green-100 to-blue-200 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">
        Collaborations
      </h1>
      <p className="text-lg text-center text-black-100 mt-2">
        Academic and research partnerships across institutions and industries.
      </p>

      {/* Collaborations List */}
      <div className="mt-8 space-y-6">
        {collaborators && collaborators.length > 0 ? (
          collaborators.map((collab) => (
            <div key={collab._id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">
                {collab.title}
              </h2>
              <p className="text-gray-700 mt-2">{collab.description}</p>

              <p className="text-sm text-gray-500 mt-1">
                Professors: {collab.professors}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Start Date:{" "}
                {new Date(collab.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No collaborations found.</p>
        )}
      </div>
    </div>
  );
};

export default Collaborations;
