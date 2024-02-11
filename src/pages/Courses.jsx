import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";
import results from "./data";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://ee3c-2405-201-300a-e213-454c-a972-964b-2712.ngrok-free.app/api/courses/")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
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
      <div className="px-10 py-5">
        {results.map((e) => (
            <Card props={e} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
