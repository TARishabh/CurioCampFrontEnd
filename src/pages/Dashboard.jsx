import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TextField from "../component/TextField";
import RadioField from "../component/RadioField";
import { Formik, Form } from "formik";
import Img from "../assets/signup_vector.png";
import Navbar from "../component/Navbar";
import * as Yup from "yup";
import UpdateDetails from "../dashboardContent/UpdateDetails";
import OngoingCourses from "../dashboardContent/OngoingCourses";
import PurchesedCourses from "../dashboardContent/PurchesedCourses";
import CompletedCourses from "../dashboardContent/CompletedCourses";

const Dashboard = () => {
  const [ completedCourses,  setCompletedCourses] = useState(true);
  const [ ongoingCourses,  setOngoingCourses] = useState(false);
  const [ purchesedCourses,  setPurchesedCourses] = useState(false);
  const [ updateDetails,  setUpdateDetails] = useState(false);

  return (
    <>
      <Navbar/>
      <ul className="m-2 p-4 rounded-sm z-10">
          <button
            className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${updateDetails? "bg-[#0369A1]" : "bg-[#E7E9E8]"}`}
            onClick={() => {
              setUpdateDetails(true);
              setCompletedCourses(false);
              setOngoingCourses(false);
              setPurchesedCourses(false);
            }}
          >
            Update Details
          </button>
          <button
            className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${completedCourses? "bg-[#0369A1]" : "bg-[#E7E9E8]"}`}
            onClick={() => {
              setUpdateDetails(false);
              setCompletedCourses(true);
              setOngoingCourses(false);
              setPurchesedCourses(false);
            }}
          >
            Completed Courses
          </button>
          <button
            className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${ongoingCourses? "bg-[#0369A1]" : "bg-[#E7E9E8]"}`}
            onClick={() => {
              setUpdateDetails(false);
              setCompletedCourses(false);
              setOngoingCourses(true);
              setPurchesedCourses(false);
            }}
          >
            Ongoing Courses
          </button>
          <button
            className={`cursor-pointer mx-2 py-2 px-3 rounded-full shadow-xl inline font-bold hover:bg-[#B6DEEF] ${purchesedCourses? "bg-[#0369A1]" : "bg-[#E7E9E8]"}`}
            onClick={() => {
              setUpdateDetails(false);
              setCompletedCourses(false);
              setOngoingCourses(false);
              setPurchesedCourses(true);
            }}
          >
            Purchesed Courses
          </button>
        </ul>
      <div className="flex justify-around">
        {updateDetails && <UpdateDetails />}
        {ongoingCourses && <OngoingCourses />}
        {purchesedCourses && <PurchesedCourses />}
        {completedCourses && <CompletedCourses />}
        <div className="hidden lg:flex">
          <img
            className="h-[300px] w-[400px] mt-20"
            src={Img}
            alt="Log in Image"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
