// Card.js
import React from 'react'
import { IoBookOutline } from "react-icons/io5";

const Card = ({ course }) => {
  const { title, description, image, keyword, price, course_modules } = course;

  return (
    <div className='shadow-lg p-3 rounded-md max-w-[270px]'>
      <img src={image} alt="Courses Image" />
      <div>
        <h2 className='font-bold text-lg'>{title}</h2>
        <p className=''>{description}</p>
        <p className='flex gap-3'><IoBookOutline className='mt-1'/> {course_modules} Chapters</p>
        <p className='text-sm'>{keyword}</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Card;

