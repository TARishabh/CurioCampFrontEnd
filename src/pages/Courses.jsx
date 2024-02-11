// Courses.js
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/courses/")
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
      <p className="pl-8 pt-4">Home/ Courses</p>
      <h1 className="pl-8 font-bold text-2xl">All Courses</h1>
      <div className="px-10 py-5 grid grid-cols-4 gap-4">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
