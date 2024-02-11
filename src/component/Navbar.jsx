import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/curiocamp.png";

const Navbar = () => {
  return (
    <div className="p-4 h-[70px] flex justify-center shadow-2xl">
      <img src={Logo} alt="Logo" className="h-[40px] absolute left-3" />
      <div>
        <ul className="flex gap-5">
          <Link className="text-[#707070] hover:text-black hover:border-b-2 border-black" to="/">
            Home
          </Link>
          <Link className="text-[#707070] hover:text-black hover:border-b-2 border-black" to="/courses">
            Courses
          </Link>
          <Link className="text-[#707070] hover:text-black hover:border-b-2 border-black">
            Dashboard
          </Link>
          <Link className="text-[#707070] hover:text-black hover:border-b-2 border-black">
            Blog
          </Link>
          <Link className="text-[#707070] hover:text-black hover:border-b-2 border-black">
            Contact Us
          </Link>
        </ul>
      </div>
      <div className="absolute right-3">
        <Link
          className="py-2 px-4 mx-2 rounded-full shadow-xl bg-[#0F1035] text-[#FFFFFF] hover:bg-[#0369A1] hover:-translate-y-1"
          to="/signin"
        >
          Log in
        </Link>
        <Link
          className="py-2 px-4 mx-2 rounded-full shadow-xl bg-[#0F1035] text-[#FFFFFF] hover:bg-[#0369A1] hover:-translate-y-1"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
