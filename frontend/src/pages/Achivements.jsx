import {React,useContext} from "react";
import { UserContext } from "../context/UserContext.jsx";
const Achievements = () => {
    const { achieve } = useContext(UserContext);
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg mt-10 mb-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-black drop-shadow-lg">Achievements</h1>
      <p className="text-lg text-center text-black-100 mt-2">Recognitions and awards received over the years.</p>
      
      {/* Achievements List - Row-wise */}
      <div className="mt-8 flex flex-col space-y-6">
        {achieve.map((achievement) => (
          <div key={achievement._id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{achievement.name}</h2>
              <p className="text-gray-700 mt-2">{achievement.description}</p>
              <p className="text-sm text-gray-500 mt-1">Date: {achievement.date}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
