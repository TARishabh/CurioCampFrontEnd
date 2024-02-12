import { useState } from "react";
import { toast } from "react-toastify";
import TextField from "../component/TextField";
import RadioField from "../component/RadioField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    pwd: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    dateOfBirth: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });
  return (
    <div className="flex items-center justify-center m-20">
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          confirmPassword: "",
          dateOfBirth: "",
          pwd: "",
          gender: "",
          phoneNumber: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, formik) => {
          const formData = {
            email: values.email,
            first_name: values.firstName,
            last_name: values.lastName,
            password2: values.confirmPassword,
            date_of_birth: "2023-01-01",
            password: values.pwd,
            gender: values.gender,
            phone_number: values.phoneNumber,
          };
          // console.log(formData);
          console.log(JSON.stringify(formData));
          const response = await fetch(
            `${url}user/register/`,
            {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          const responseData = await response.json();
          console.log(responseData);
        }}
      >
        {(formik) => (
          <Form className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#382bf0]">
                Sign Up
              </p>
            </div>
            <div className="container">
            <TextField className="mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500" name="email" type="email" placeholder="Email" />
            <TextField className="mt-1 block w-2/3 px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" name="firstName" type="text" placeholder="First Name" />
            <TextField className="mt-1 block w-2/3 px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            name="lastName" type="text" placeholder="Last Name" />
            <TextField className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
            name="pwd" type="password" placeholder="Password" />
            <TextField
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <TextField
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              name="dateOfBirth"
              type="date"
              placeholder="Date Of Birth"
            />
            <div className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none">
            <div
              className={`my-2 p-2 rounded-md flex items-center justify-center gap-4 text-black ] `}
            >
              <RadioField type="radio" name="gender" value="Male" id="male" />
              <RadioField
                type="radio"
                name="gender"
                value="Female"
                id="female"
              />
              <RadioField
                type="radio"
                name="gender"
                value="Others"
                id="others"
              />
            </div>
            </div>
            <TextField
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-full text-center text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
            />
            </div>
            <button
              type="submit"
              className="text-[#E0E0E0] rounded-full px-4 py-3 my-8 mx-auto flex items-center bg-[#5e43f3] shadow-lg shadow-[#040c166b] font-bold text-lg dark:shadow-lg dark:shadow-[#000000] hover:bg-[#382bf0] hover:-translate-y-1 duration-300"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
