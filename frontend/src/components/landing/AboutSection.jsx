import React from "react";
import flag from "../../assets/flag.png";

const AboutSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-alike text-gray-900 mb-12 text-center">
          About Our Academy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl shadow-2xl overflow-hidden">
            <img
              src={flag}
              alt="Academy Building"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col"> 
            <p className="text-lg font-alike text-justify text-gray-700 leading-relaxed mb-6">
              Montclair Academy is committed to providing high-quality education
              in a nurturing and supportive environment. We aim to empower
              students to achieve academic excellence, develop critical thinking,
              and grow personally. Our programs encourage curiosity, creativity,
              and confidence, helping every learner reach their full potential and
              become compassionate, lifelong learners.
            </p>
            <button className="btn font-alike bg-[#620C12] text-white hover:bg-[#4f090f] mt-1 border-black mx-auto">
                Learn More
            </button>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;