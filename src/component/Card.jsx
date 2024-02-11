import React from 'react'
import { IoBookOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className='shadow-lg p-3 rounded-md max-w-[270px]'>
      <img  src="" alt="Courses Image" />
      <div>
        <h2 className='font-bold text-lg'>Web Development</h2>
        <p className=''>Become A Web Developer In 6 Months</p>
        <p className='flex gap-3'><IoBookOutline className='mt-1'/> 4 Chapters</p>
        <p className='text-sm'>React, Tailwind</p>
        <p>Free</p>
      </div>
    </div>
  )
}

export default Card
