import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import Navbar from "../component/Navbar";
import Overview from "../courseContent/Overview";
import CourseContent from "../courseContent/CourseContent";
import Details from "../courseContent/Details";
import Instructor from "../courseContent/Instructor";
import Review from "../courseContent/Review";

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
//   let scrollStop = false;

  useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL;
    fetch(`${url}api/courses/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setCourse(data.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

//   function getScrollPosition() {
//     let scrollPosition = window.scrollY;
//     if(scrollPosition >= 350){
//         scrollStop = true;
//     }
//     console.log('Scroll Position:', scrollPosition);
//   }
//   window.addEventListener('scroll', getScrollPosition);

  return (
    <div>
      <Navbar />
      <div className="w-full h-[300px] bg-[#DCF2F1] p-20 flex flex-col gap-2">
        <h2 className="font-bold text-4xl">{course.title}</h2>
        <p className="font-semibold">{course.description}</p>
        <p className="flex gap-2">
          <IoBookOutline className="mt-[5px]" /> {course.course_modules} Modules
        </p>
        <p className="text-sm">{course.keyword}</p>
        <p className="font-semibold">₹{course.price}</p>
      </div>
      <div>
        <ul className="m-2 p-4 sticky top-2 bg-white rounded-sm z-10">
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold bg-[#E7E9E8] hover:bg-[#0369A1]"
            spy={true}
            to="Overview"
            smooth={true}
            duration={500}
          >
            Overview
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold bg-[#E7E9E8] hover:bg-[#0369A1]"
            spy={true}
            to="CourseContent"
            smooth={true}
            duration={500}
          >
            Course Content
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold bg-[#E7E9E8] hover:bg-[#0369A1]"
            spy={true}
            to="Details"
            smooth={true}
            duration={500}
          >
            Details
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold bg-[#E7E9E8] hover:bg-[#0369A1]"
            spy={true}
            to="Instructor"
            smooth={true}
            duration={500}
          >
            Instructor
          </Link>
          <Link
            activeClass="active"
            className="cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold bg-[#E7E9E8] hover:bg-[#0369A1]"
            spy={true}
            to="Review"
            smooth={true}
            duration={500}
          >
            Review
          </Link>
        </ul>
        <Overview />
        <CourseContent />
        <Details />
        <Instructor />
        <Review />
      </div>
    </div>
  );
};

export default CoursePage;
