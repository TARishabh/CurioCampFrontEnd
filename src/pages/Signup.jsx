import { useState } from "react";
import { toast } from "react-toastify";
import TextField from "../component/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const Signup = () => {
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
    <div className="m-20">
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
          console.log("*"*50)
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
            "https://37b0-2405-201-300a-e213-f568-9a35-9648-ea58.ngrok-free.app/user/register/",
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
              <p className="text-4xl font-bold inline border-b-4 border-[#382bf0]">
                Contact
              </p>
            </div>

            <TextField name="email" type="email" placeholder="Email" />
            <TextField name="firstName" type="text" placeholder="First Name" />
            <TextField name="lastName" type="text" placeholder="Last Name" />
            <TextField name="pwd" type="password" placeholder="Password" />
            <TextField
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <TextField
              name="dateOfBirth"
              type="date"
              placeholder="Date Of Birth"
            />
            <div
              className={`my-2 w-full p-2 rounded-md text-black bg-[#E0E0E0] dark:bg-[#ccd6f6] shadow-lg shadow-[#040c166b] border-4
              }`}
            >
              <div>
                <input type="radio" name="gender" value="Male" id="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input type="radio" name="gender" value="Female" id="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input type="radio" name="gender" value="Others" id="others" />
                <label htmlFor="others">Others</label>
              </div>
            </div>
            {/* <TextField name="gender" type="text" placeholder="Gender" /> */}
            <TextField
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
            />
            <button
              type="submit"
              className="text-[#E0E0E0] rounded-md px-4 py-3 my-8 mx-auto flex items-center bg-[#5e43f3] shadow-lg shadow-[#040c166b] font-bold text-lg dark:shadow-lg dark:shadow-[#000000] hover:bg-[#382bf0] hover:-translate-y-1 duration-300"
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
