import React from "react";

const PersonalSection = ({ onNext }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Personal Information</h1>
      {/* Add your form fields here */}
      <button
        onClick={onNext}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalSection;
