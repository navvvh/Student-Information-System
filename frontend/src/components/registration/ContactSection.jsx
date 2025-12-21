import React from "react";
import tao from "../../assets/tao.png";
import { InputField } from './PersonalSection'; 

const ContactSection = ({ onNext, onBack, updateField, values }) => { 
  return (
    <div className="flex justify-center mx-auto my-8 max-w-5xl p-0 bg-white shadow-xl rounded-lg overflow-hidden min-h-[520px]">
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
          Enter your contact details
        </h2>

        <form 
          onSubmit={(e) => { 
            e.preventDefault(); 
            onNext(); 
          }} 
          className="flex flex-col h-full"
        >
          <InputField 
            label="Contact No." 
            id="contactNo" 
            type="tel" 
            required={true} 
            value={values.contactNo} 
            onChange={updateField} 
            placeholder="e.g., 09123456789"
            pattern="^09[0-9]{9}$"
            className="mb-4" 
          />
          <InputField 
            label="Email" 
            id="email" 
            type="email" 
            required={true} 
            value={values.email} 
            onChange={updateField} 
            className="mb-12" 
          />
          
          <div className="flex justify-between gap-4 mt-auto">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-2 bg-[#640000] text-white rounded-md shadow-lg hover:bg-red-800 transition-colors font-alike"
            >
              Back
            </button>
            <button 
              type="submit" 
              className="px-8 py-2 bg-[#640000] text-white rounded-md shadow-lg hover:bg-red-800 transition-colors font-alike"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;