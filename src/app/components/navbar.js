import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center ml-[10%]">
        <Image src={logo} alt="Logo" width={180} height={180} />
      </div>
      <div>
        <button className="px-4 py-2  w-[200px] text-white bg-[#24305E] rounded-full hover:bg-[#3e486d] text-lg font-bold">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
