// Card.js
import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { id, title, description, image, keyword, price, course_modules } = course;

  return (
    <Link className='shadow-lg p-3 rounded-md max-w-[270px]' to={`/courses/${id}/`}>
      <img src={image} alt="Courses Image" />
      <div>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className='font-semibold'>{description}</p>
        <p className='flex gap-2'><IoBookOutline className='mt-[5px]'/> {course_modules} Modules</p>
        <p className='text-sm'>{keyword}</p>
        <p className='font-semibold'>₹{price}</p>
      </div>
    </Link>
  )
}

export default CourseCard;

