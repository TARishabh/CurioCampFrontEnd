import { useState } from "react";
import { toast } from "react-toastify";
import TextField from "../component/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Signin = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    pwd: Yup.string().required("Required"),
  });
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#DCF2F1]">
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
          )
            const responseData = await response.json();
            console.log(responseData);
        }}
      >
        {(formik) => (
          <Form className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#0F1035]">
                Sign In
              </p>
            </div>

            <TextField name="email" type="email" placeholder="Email" />
            <TextField name="pwd" type="password" placeholder="Password" />
            <button
              type="submit"
              className="text-[#E0E0E0] rounded-md px-4 py-3 my-8 mx-auto flex items-center bg-[#0369A1] shadow-lg shadow-[#040c166b] font-bold text-lg dark:shadow-lg dark:shadow-[#000000] hover:bg-[#382bf0] hover:-translate-y-1 duration-300"
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
