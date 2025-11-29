import React from "react";

const AcadInfoSection = ({ onPrev }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Academic Information</h1>
      {/* Add your form fields here */}
      <button
        onClick={onPrev}
        className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default AcadInfoSection;
