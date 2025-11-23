import bgImage from "../../assets/9.png";
import bg8 from "../../assets/asdagffalhaalhjshgd.png";

const FrontSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      
      <div className="absolute inset-0 bg-white/50"></div>

      
      <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center justify-center mb-8">
          <img
            src={bg8}
            alt="Montclair Academy logo"
            className="w-40 h-45 -mr-6"
          />
          <h1 className="text-4xl font-alike text-black font-bold">
            Montclair <br /> Academy
          </h1>
        </div>
      </div>


      <div className="relative z-20 text-center flex flex-col items-center mt-20">
        <p className="text-5xl font-alike text-black tracking-wide">
          Welcome To
        </p>

        <h1 className="text-8xl font-alike text-black font-bold mt-2">
          Montclair Academy
        </h1>

        <p className="text-2xl font-alike text-black italic mt-3">
          “Excellence Through Growth and Innovation”
        </p>
      </div>

      <div className="absolute bottom-20 w-full flex justify-center z-20">
        <button className="btn font-alike bg-[#620C12] text-white hover:bg-[#4f090f] px-10 text-1xl border-black">Get Started</button>
      </div>
    </section>
  );
};

export default FrontSection;
