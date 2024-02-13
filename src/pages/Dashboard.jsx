import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TextField from "../component/TextField";
import RadioField from "../component/RadioField";
import { Formik, Form } from "formik";
import Img from "../assets/signup_vector.png";
import Navbar from "../component/Navbar";
import * as Yup from "yup";
import UpdateDetails from "../dashboardContent/UpdateDetails";

const Dashboard = () => {

  return (
    <>
      <Navbar/>
      <div className="flex justify-around">
        <UpdateDetails />
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
