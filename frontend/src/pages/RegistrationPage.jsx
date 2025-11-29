import React, { useState } from "react";
import Navbar from "../components/registration/navbar";
import ProgressSection from "../components/registration/ProgressSection";
import PersonalSection from "../components/registration/PersonalSection";
import ContactSection from "../components/registration/ContactSection";
import AcadInfoSection from "../components/registration/AcadInfoSection";
import flag from "../assets/flag.png";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
    studentId: "",
    gender: "",
    birthdate: "",
    hometown: "",
    contactNo: "",
    email: "",
    department: "",
    enrollmentDate: "",
    yearLevel: "",
    gwa: "",
  });


  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  
  const handleFinish = () => {
    toast.loading("Submitting...");

    setTimeout(() => {
      toast.dismiss();
      toast.success("Registration Complete!");

      
      const existing = JSON.parse(localStorage.getItem("students") || "[]");
      existing.push(formData);
      localStorage.setItem("students", JSON.stringify(existing));

      navigate("/records"); 
    }, 800);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      
    {/* Background */}
      <div
        className="
          absolute inset-0 
          bg-cover bg-center bg-no-repeat
          before:absolute before:inset-0 before:bg-white/40
          -z-10
        "
        style={{ backgroundImage: `url(${flag})` }}
      />

      <div className="relative z-10 flex-grow">
        <Navbar />
        <ProgressSection step={step} />

        {step === 1 && (
          <PersonalSection
            onNext={() => setStep(2)}
            updateField={updateField}
            values={formData}
          />
        )}

        {step === 2 && (
          <ContactSection
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
            updateField={updateField}
            values={formData}
          />
        )}

        {step === 3 && (
          <AcadInfoSection
            onBack={() => setStep(2)}
            onFinish={handleFinish}
            updateField={updateField}
            values={formData}
          />
        )}
      </div>

      <footer className="bg-[#640000] text-white py-6 px-6">
        <div className="mx-auto flex justify-between items-center text-sm">
          <p>Montclair Academy © 2025</p>
          <a href="#" className="hover:text-red-100">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationPage;
