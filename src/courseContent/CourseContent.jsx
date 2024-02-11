import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineExpandMore } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
{/* <FaRegCirclePlay /> */}
import { HiOutlineDocumentCheck } from "react-icons/hi2";
{/* <HiOutlineDocumentCheck /> */}


const CourseContent = () => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4MjgxMjc2LCJpYXQiOjE3MDc2NzY0NzYsImp0aSI6ImRiNTQzMTY0NzkzYzRkY2JhYjQxMjY0YzcxNGI1MWM3IiwidXNlcl9pZCI6MX0.VECAlRtCIzUeg2g1Q0DX09dswT0oVmSFTF0FwUU0Cmw"
    fetch(`${url}api/modules/?course_id=${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        //   console.log(response);
          return response.json();
        })
        .then((data) => {
        //   console.log(data.results[0].title);
          setCourse(data.results);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
  }, []);
  return (
    <div
      name="CourseContent"
      className="m-4 p-3 max-w-[600px] shadow-lg rounded-sm"
    >
      <h1 className="font-bold text-xl mb-3">Course Content</h1>
      {/* {console.log(Array.isArray(course))} */}
      {course.map((module) => (
        <Accordion className="max-w-[500px]" key={module.id}>
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore />}
            className="shadow-md"
          >
            <p>{module.title}</p>
          </AccordionSummary>
          <AccordionDetails>
            {module.content_desc.map((content, index) => (
              <div key={index}>
                {content.content_type === "video" ? (
                  <FaRegCirclePlay />
                ) : content.content_type === "quiz" ? (
                  <HiOutlineDocumentCheck />
                ) : null}
                <h1>{content.title}</h1>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseContent;
