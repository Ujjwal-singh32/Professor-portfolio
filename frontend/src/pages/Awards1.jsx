import { React, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Awards1 = () => {
  const { award } = useContext(UserContext);
  return (
 <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      <div className="max-w-4xl mx-auto rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Awards
        </h1>
        <div className="space-y-4">
          {award.map((award) => (
            <div
              key={award.id}
              className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-md"
            >
              <h2 className="text-3xl font-semibold text-black-700">{award.name}</h2>
              <p className="text-gray-600 mt-2">{award.description}</p>
              <p className="text-gray-500 text-sm mb-2 mt-2">Year: {award.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards1;
