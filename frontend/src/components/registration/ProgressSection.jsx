import React from 'react';

const ProgressSection = ({ step }) => {
 
  const ACTIVE_COLOR = 'bg-[#640000]'; 
  const INACTIVE_COLOR = 'bg-gray-300'; 
  const ACTIVE_TEXT = 'text-[#640000]'; 
  const INACTIVE_TEXT = 'text-gray-700'; 

  
  const getBarClass = (stepNumber) => {
    return stepNumber <= step ? ACTIVE_COLOR : INACTIVE_COLOR;
  };
  
  
  const getTextClass = (stepNumber) => {
    return stepNumber === step ? ACTIVE_TEXT : INACTIVE_TEXT;
  };

  const StepItem = ({ stepNumber, label }) => (
    <div className="w-1/3 flex flex-col items-center relative px-2">
      
      <span className={`text-sm md:text-base mb-2 ${getTextClass(stepNumber)} font-semibold transition-colors duration-300`}>
        {label}
      </span>
      
      <div className={`w-full h-3 rounded-full shadow-inner ${getBarClass(stepNumber)} transition-colors duration-500`}>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center mx-auto max-w-4xl py-6 md:py-8">
      <div className="flex w-full justify-between items-start">
        
        <StepItem stepNumber={1} label="Personal Information" />
        <StepItem stepNumber={2} label="Contact Details" />
        <StepItem stepNumber={3} label="Academic Information" />
        
      </div>
    </div>
  );
};

export default ProgressSection;