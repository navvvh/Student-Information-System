import React from "react";
import tao from "../../assets/tao.png";

const InputField = ({ label, id, type = 'text', required, className = '' }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="text-sm font-serif mb-1 text-[#900000] font-semibold">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      className="p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#900000] focus:border-[#900000] transition-colors"
      {...(id === 'birthdate' && { placeholder: 'mm/dd/yyyy', type: 'text' })}
    />
  </div>
);

const PersonalSection = ({ onNext }) => {
  return (
    <div className="flex justify-center mx-auto my-8 max-w-5xl p-0 bg-white shadow-xl rounded-lg overflow-hidden">
      
      <div
        className="w-[38%] p-4 flex flex-col justify-between items-center text-white" 
        style={{
          backgroundImage: `url(${tao})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "center",
          backgroundColor: "#900000", 
        }}
      >
      </div>

      <div className="w-[62%] p-10 bg-white flex flex-col">
        
        <h2 className="text-2xl font-serif font-light mb-8 text-gray-800 border-b pb-2">
          Enter your details
        </h2>

        <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="flex flex-col h-full">
          
          <div className="flex gap-4 mb-4">
            <InputField label="First Name" id="firstName" required={true} className="flex-1" />
            <InputField label="Last Name" id="lastName" required={true} className="flex-1" />
            <InputField label="Middle Initial" id="middleInitial" required={false} className="w-1/4" /> 
          </div>

          <InputField label="Student ID" id="studentId" required={true} className="mb-4" />
          <InputField label="Gender" id="gender" required={true} className="mb-4" />
          <InputField label="Birthdate" id="birthdate" type="text" required={true} className="mb-4" />
          
          <InputField label="Hometown" id="hometown" required={true} className="mb-12" />
          
          <div className="flex justify-end gap-4 mt-auto">
            <button 
              type="submit" 
              className="px-8 py-2 bg-[#640000] text-white rounded-md shadow-lg hover:bg-red-800 transition-colors font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalSection;