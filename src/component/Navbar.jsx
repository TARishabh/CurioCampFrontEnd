import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_Transparent.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="hidden lg:flex">
        <div className="p-4 h-[70px] w-full flex justify-center shadow-2xl">
        <div>
        <img src={Logo} alt="Logo" className="h-[40px] absolute left-3 top-4" />
        </div>
          <div>
            <ul className="flex gap-5">
              <Link
                className="text-[#707070] hover:text-black hover:border-b-2 border-black"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-[#707070] hover:text-black hover:border-b-2 border-black"
                to="/courses"
              >
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
          <div className="absolute right-3 top-3">
            <div className="py-2 px-4 mx-2 mt-1 inline-block rounded-full shadow-2xl bg-[#0F1035] text-[#FFFFFF] hover:bg-[#0369A1] hover:-translate-y-1">
              <Link to="/signin">Log in</Link>
            </div>

            <div className="py-2 px-4 mx-2 inline-block rounded-full shadow-2xl bg-[#0F1035] text-[#FFFFFF] hover:bg-[#0369A1] hover:-translate-y-1">
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      {/* hamburger */}
      <div
        onClick={handleClick}
        className="lg:hidden z-40 text-black p-4 h-[70px] w-full flex justify-between shadow-2xl"
      >
        <img src={Logo} alt="Logo"/>
        {nav ? <FaTimes size={30} /> : <FaBars size={25} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          nav
            ? "absolute z-20 top-0 left-0 w-full h-screen bg-[#E0E0E0] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-3 text-3xl">
          <Link onClick={handleClick} to="/" smooth={"true"} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="/courses"
            smooth={"true"}
            duration={500}
          >
            Courses
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={"true"}
            duration={500}
          >
            Dashboard
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={"true"}
            duration={500}
          >
            Blog
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={"true"}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="/signin"
            smooth={"true"}
            duration={500}
          >
            Log in
          </Link>
        </li>
        <li className="py-3 text-3xl">
          <Link
            onClick={handleClick}
            to="/signup"
            smooth={"true"}
            duration={500}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
