
import React from "react";

const Awards = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 to-blue-300 shadow-lg rounded-lg">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg">Awards & Recognitions</h1>
      <p className="text-lg text-center text-gray-100 mt-2">Honors and achievements earned throughout the academic career.</p>
      
      {/* Awards List */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Major Awards</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Best Researcher Award - XYZ University (2023)</li>
          <li>Outstanding Educator Award - ABC Institute (2021)</li>
          <li>Lifetime Achievement in AI - AI Global Summit (2019)</li>
          <li>Innovator of the Year - DEF Conference (2018)</li>
        </ul>
      </div>
      
      {/* Additional Honors */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800">Additional Honors</h2>
        <p className="text-gray-700 mt-2">
          Dr. John Doe has been recognized internationally for his contributions to AI research and education, receiving
          various fellowships and keynote invitations at prestigious conferences worldwide.
        </p>
      </div>
    </div>
  );
};

export default Awards;
