import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import SectionTitle from "../component/sectiontitle";
import heroImg from "../assets/hero.png";
import Container from "../component/container";

const Home = () => {
  return (
    <div className="">
      <Navbar isSignin isSignup/>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
            Welcome to CurioCamp
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
            Discover a diverse array of courses designed to fuel your curiosity
          and expand your horizons. Engage with expert instructors and a vibrant
          learning community. Flexible learning options to fit your schedule and
          learning style. Earn certifications and unlock new opportunities.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                to="/courses"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-full ">
                View Courses
              </Link>
              
                
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      {/* <section className="lg:p-20 p-5 max-w-xl">
        <h1 className="font-bold text-4xl">
          Welcome to CurioCamp: Your Portal to Knowledge Exploration
        </h1>
        <p className="font-medium mt-3 mb-4">
          Discover a diverse array of courses designed to fuel your curiosity
          and expand your horizons. Engage with expert instructors and a vibrant
          learning community. Flexible learning options to fit your schedule and
          learning style. Earn certifications and unlock new opportunities.
        </p>
        <div className="py-2 px-5 rounded-full inline-block shadow-xl bg-[#0F1035] text-[#FFFFFF] hover:bg-[#382bf0] hover:-translate-y-1 duration-200">
          <Link to="/courses">View Courses</Link>
        </div>
      </section> */}
      <SectionTitle
        pretitle="CurioCamp Benefits"
        title=" Why should you use CurioCamp">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
    </div>
  );
};

export default Home;
