// Card.js
import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, title, description, image, keyword, price, course_modules } =
    course;
  // const sliced = keyword.slice(1,5);

  return (
    <div className="shadow-lg p-3 rounded-2xl h-[325px] max-w-[270px]  hover:-translate-y-1 duration-200 hover:bg-[#E7F0F5]">
      <Link to={`/courses/${id}/`}>
        <img
          className="shadow-md rounded-lg mb-3 hover:-translate-y-1 duration-200"
          src={image}
          alt="Courses Image"
        />
        <div className=" flex flex-col gap-2">
          <h2 className="font-bold text-lg">{title}</h2>
          {/* <p className='font-semibold'>{description}</p> */}
          <p className="flex gap-2 text-[#4F46E5]">
            <IoBookOutline className="mt-[5px] text-[#4F46E5]" />{" "}
            {course_modules} Modules
          </p>
          <p className="text-sm">{keyword}</p>
          <p className="font-semibold">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
