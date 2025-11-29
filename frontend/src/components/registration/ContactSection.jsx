import React from "react";
import tao from "../../assets/tao.png";

const InputField = ({ label, id, type = 'text', required, className = '', value, onChange }) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={id} className="text-sm font-serif mb-1 text-[#900000] font-semibold">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required={required}
      value={value} // FIX: Idinagdag ito
      onChange={(e) => onChange(id, e.target.value)} // FIX: Idinagdag ito
      className="p-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-[#900000] focus:border-[#900000] transition-colors"
      {...(id === 'birthdate' && { placeholder: 'mm/dd/yyyy', type: 'text' })}
    />
  </div>
);

const ContactSection = ({ onNext, onBack, updateField, values }) => { // FIX: Idinagdag ang updateField at values
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

        <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="flex flex-col h-full">
          
         
          <InputField 
            label="Contact No." 
            id="contactNo" 
            type="tel" 
            required={true} 
            value={values.contactNo} // FIX: Gumagamit na ng value
            onChange={updateField} // FIX: Gumagamit na ng onChange
            className="mb-4" 
          />
          <InputField 
            label="Email" 
            id="email" 
            type="email" 
            required={true} 
            value={values.email} // FIX: Gumagamit na ng value
            onChange={updateField} // FIX: Gumagamit na ng onChange
            className="mb-12" 
          />
          
          
          <div className="flex justify-between gap-4 mt-auto">
            <button
              type="button"
              onClick={onBack}
              className="px-8 py-2 bg-gray-200 text-gray-700 rounded-md shadow-lg hover:bg-gray-300 transition-colors font-semibold"
            >
              Back
            </button>
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

export default ContactSection;