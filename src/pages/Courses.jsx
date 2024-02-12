// Courses.js
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import CourseCard from "../component/CourseCard";
import results from "./data";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL;
    fetch(`${url}api/courses/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data.results.results);
        setCourses(data.results.results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="courses">
      <Navbar />
      <div className="w-full h-screen">
      <div className="mt-3">
      <p className="pl-8 pt-4">Home/ Courses</p>
      <h1 className="pl-8 font-bold text-2xl">All Courses</h1>
      </div>
      <div className="flex items-center justify-center">
      <div className="m-1 px-10 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  h-screen">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Courses;
