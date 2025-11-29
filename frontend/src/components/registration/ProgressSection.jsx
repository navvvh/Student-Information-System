import React from "react";

const ProgressSection = ({ step }) => {
  return (
    <div className="p-8 bg-gray-100">
      <p className="text-lg font-bold">Step {step} of 3</p>
      <div className="flex gap-2 mt-4">
        <div
          className={`h-2 flex-1 rounded ${
            step >= 1 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`h-2 flex-1 rounded ${
            step >= 2 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`h-2 flex-1 rounded ${
            step >= 3 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressSection;
