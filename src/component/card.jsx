import React from "react";
import Card1 from "../assets/course1.png"

function Card() {
  return (
    <div>
      <div class="max-w-[350px] p-6  rounded-2xl shadow">
        <img
        className="rounded-2xl"
        src={Card1}
        />
        <a href="#">
          <h5 class="mb-2 text-lg font-bold tracking-tight text-indigo-600 ">
            Data Structures with C++
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-600 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <as
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </as>
      </div>
    </div>
  );
}
export default Card;
