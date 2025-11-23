import React from "react";
import paper from "../../assets/paper.png";
import toga from "../../assets/toga.png";
import boc from "../../assets/boc.png";
import madami from "../../assets/madami.png";

const services = [
  {
    title: "Student Records Management",
    description:
      "Secure and efficient access to all student data, available for admins only.",
    icon: paper,
  },
  {
    title: "Academic Tracking",
    description:
      "Monitor student performance and academic progress effortlessly.",
    icon: toga,
  },
  {
    title: "Notifications & Updates",
    description:
      "Keep students and parents informed with important announcements.",
    icon: boc,
  },
];

const ServiceCard = ({ service }) => (
  <div
    className="card rounded-3xl shadow-2xl p-8 h-full flex flex-col justify-between items-center text-center transform transition duration-300 hover:scale-[1.03]"
    style={{
      background: "radial-gradient(circle at center, #620C12, #3D070B)",
    }}
  >
    <div className="card-body p-0 flex flex-col items-center w-full">
      <h3
        className="text-3xl font-bold font-alike text-white mb-6 leading-snug"
        style={{ minHeight: "5rem" }}
      >
        {service.title}
      </h3>

      <figure className="my-6">
        <img
          src={service.icon}
          alt={service.title}
          className="w-28 h-28 object-contain mx-auto"
        />
      </figure>

      <p className="text-base text-center font-alike text-white opacity-80 leading-relaxed mt-4">
        {service.description}
      </p>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white px-4 shadow-inner shadow-gray-400">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-alike text-gray-900 mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="w-full overflow-hidden rounded-3xl shadow-2xl mb-10">
          <img
            src={madami}
            alt="Students cheering"
            className="w-full h-64 md:h-96 object-cover object-[0_20%]"
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4">
          <h3 className="text-2xl md:text-5xl font-bold font-alike text-gray-900 mb-8">
            Ready to Manage Student Records?
          </h3>

          <button className="btn font-alike bg-[#620C12] text-white hover:bg-[#4f090f] px-10 py-3 border-none rounded-lg shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
