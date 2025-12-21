import React from "react";
import bg8 from "../../assets/asdagffalhaalhjshgd.png";

const Navbar = () => {
  return (
    <nav className="bg-[#640000] text-white px-4 py-3 flex items-center gap-3">
      <img src={bg8} alt="Montclair" className="size-16 -m-5" />
      <span className="text-1xl font-alike leading-tight">
        Montclair <br /> Academy
      </span>
    </nav>
  );
};

export default Navbar;
