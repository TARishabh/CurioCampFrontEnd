import { useState } from "react";
import { toast } from "react-toastify";
import TextField from "../component/TextField";
import Navbar from "../component/Navbar";
import { Formik, Form } from "formik";
import Img from "../assets/login_vector.png";
import * as Yup from "yup";

const Signin = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    pwd: Yup.string().required("Required"),
  });
  return (
    <>
      <Navbar isSignin/>
      <div className="flex justify-around">
        <div className="w-full mt-20 flex justify-center items-center text-black">
          <Formik
            initialValues={{
              email: "",
              pwd: "",
            }}
            validationSchema={validate}
            onSubmit={async (values, formik) => {
              const formData = { email: values.email, password: values.pwd };
              console.log(formData);
              console.log(JSON.stringify(formData));
              const response = await fetch(
                "https://37b0-2405-201-300a-e213-f568-9a35-9648-ea58.ngrok-free.app/user/login/",
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
              <Form className="flex flex-col p-5 max-w-[400px] w-full">
                <div className="pb-8 flex justify-center">
                  <p className="text-4xl font-bold inline">Log In</p>
                </div>

                <TextField name="email" type="email" placeholder="Email" />
                <TextField name="pwd" type="password" placeholder="Password" />
                <button
                  type="submit"
                  className="text-[#E0E0E0] rounded-full px-5 py-2 my-8 mx-auto flex items-center bg-[#0F1035] shadow-lg shadow-[#040c166b] font-bold text-lg dark:shadow-lg dark:shadow-[#000000] hover:bg-[#382bf0] hover:-translate-y-1 duration-300"
                >
                  Log In
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="hidden lg:flex">
        <img className="h-[400px] w-[700px] mt-20" src={Img} alt="Log in Image" />
        </div>
      </div>
    </>
  );
};

export default Signin;
