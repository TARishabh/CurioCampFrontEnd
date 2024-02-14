import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
{
  /* <FaRegCirclePlay /> */
}
import { HiOutlineDocumentCheck } from "react-icons/hi2";
{
  /* <HiOutlineDocumentCheck /> */
}

const CourseContent = () => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  // const handleCompleted
  useEffect(() => {
    localStorage.setItem("token", import.meta.env.VITE_USER_TOKEN);
    const url = import.meta.env.VITE_BASE_URL;
    // const token = localStorage.getItem('token');
    const token = import.meta.env.VITE_TOKEN;
    fetch(`${url}api/modules/?course_id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
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
  return (
    <div
      name="CourseContent"
      className="m-4 p-3 max-w-[800px] shadow-lg w-full rounded-2xl"
    >
      <h1 className="font-bold text-xl ml-6 mb-3">Course Content</h1>
      {/* {console.log(Array.isArray(course))} */}
      {course.map((module) => (
        <Accordion
          className=" gap-0 flex font-semibold  flex-col items-left w-full px-2 py-2 text-lg text-left text-gray-800 rounded-lg  bg-gray-50 hover:bg-gray-100 hover:translate-y-1 duration-200 after:text-[#2F57EF]"
          key={module.id}
        >
          <AccordionSummary expandIcon={<MdOutlineExpandMore />} className="">
            <p>{module.title}</p>
          </AccordionSummary>
          <AccordionDetails className="text-left">
            {module.content_desc.map((content, index) => (
              <div className="m-2" key={index}>
                {content.content_type === "video" && (
                  <div className="flex gap-2">
                    <div className="mt-1 ">
                      <FaRegCirclePlay />
                    </div>
                    <h1>{content.title}</h1>
                  </div>
                )}
                {/* <button type="submit" onClick={handleCompleted}>
                  is completed
                </button> */}
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <Accordion
        className=" gap-0 flex font-semibold  flex-col items-left w-full px-2 py-2 text-lg text-left text-gray-800 rounded-lg  bg-gray-50 hover:bg-gray-100 hover:translate-y-1 duration-200 after:text-[#2F57EF]"
      >
        <AccordionSummary expandIcon={<MdOutlineExpandMore />} className="">
          <p>Course Quiz</p>
        </AccordionSummary>
        <AccordionDetails className="text-left">
          <div className="m-2">
            <Link to={`/courses/${id}/mcq`} className="flex gap-2">
              <div className="mt-1 ">
                <HiOutlineDocumentCheck />
              </div>
              <h2>Problem Quiz</h2>
            </Link>
            {/* <button type="submit" onClick={handleCompleted}>
                  is completed
                </button> */}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CourseContent;
