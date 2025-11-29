import React from "react";

const ContactSection = ({ onNext, onPrev }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Contact Information</h1>
      {/* Add your form fields here */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={onPrev}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
