import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="p-20 max-w-lg">
        <h1 className="font-bold text-4xl">
          Welcome to CurioCamp: Your Portal to Knowledge Exploration
        </h1>
        <p className="font-medium mt-3 mb-4">
          Discover a diverse array of courses designed to fuel your curiosity
          and expand your horizons. Engage with expert instructors and a vibrant
          learning community. Flexible learning options to fit your schedule and
          learning style. Earn certifications and unlock new opportunities.
        </p>
        <Link
          className="py-2 px-5 rounded-full shadow-xl bg-[#0F1035] text-[#FFFFFF] hover:bg-[#0369A1] hover:-translate-y-1"
          to="/courses"
        >
          View Courses
        </Link>
      </section>
    </div>
  );
};

export default Home;
