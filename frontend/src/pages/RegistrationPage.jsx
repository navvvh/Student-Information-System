import React, { useState } from "react";
import Navbar from "../components/registration/navbar";
import ProgressSection from "../components/registration/ProgressSection";
import PersonalSection from "../components/registration/PersonalSection";
import ContactSection from "../components/registration/ContactSection";
import AcadInfoSection from "../components/registration/AcadInfoSection";
import Footer from "../components/registration/Footer";

const RegistrationPage = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <ProgressSection step={step} />

      {step === 1 && <PersonalSection onNext={() => setStep(2)} />}
      {step === 2 && (
        <ContactSection onNext={() => setStep(3)} onPrev={() => setStep(1)} />
      )}
      {step === 3 && <AcadInfoSection onPrev={() => setStep(2)} />}

      <Footer />
    </div>
  );
};

export default RegistrationPage;
