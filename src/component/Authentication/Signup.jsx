import React, { useState, useEffect, useContext } from 'react';
import '../../App.css'

const Signup = () => {

  const host = `https://baff-2405-201-300a-e213-e1ba-cf5e-fcec-270.ngrok-free.app/ `;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword,setconfirmPassword] = useState("");
  const [dateOfBirth,setdateOfBirth] = useState("");
  const [gender,setgender] = useState("");
  const [phoneNumber,setphoneNumber] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

const handleFormSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  handleCheckState(e);  // Call your custom form submission logic
};

const handleCheckState = async (e) => {
  e.preventDefault();
  // setLoading(true);
  try {
    let data = {
      email: email
  }
  const response = await fetch(`https://baff-2405-201-300a-e213-e1ba-cf5e-fcec-270.ngrok-free.app/user/register/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
const res = await response.json();
console.log(res);
  } catch (error) {
    console.log(error);
  }
}
return (
  <div id="main-container">
      <section className="auth-sidebar">
          <div className="auth-sidebar-content">
              <a href="/" className="auth-sidebar-logo">
                  {/* Your SVG code here */}
              </a>
              <video
                  playsInline
                  className="auth-sidebar-video"
                  autoPlay
                  loop
                  muted
                  controls={false}
                  preload="none"
                  src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
                  // src='../assets/a_video_of_stars_galaxy_seed6246393802789651653.mp4'
              ></video>
              {/* <video data-testid="video-asset" src='../assets/istockphoto-813115280-640-adpp-is_rsPnJnen.mp4' autoPlay loop muted></video> */}

              <a style={{display:"none"}} className="auth-sidebar-credit">
                  {/* @glebich */}
              </a>
          </div>
      </section>
      <section className="content" data-content-container="">
          <main>
              <div className="auth-content">
                  <h2>Login to Acroportal</h2>
                  <div className="auth-connections">
                      {/* Google Sign-In Button */}
                      <div
                          id="g_id_onload"
                          data-client_id="32073492121-s6ur8ti01mh34gq2bpbufb8ujdfrpn4v.apps.googleusercontent.com"
                          data-ux_mode="redirect"
                      ></div>
                      <form className="auth-google-form" action="/auth/google" acceptCharset="UTF-8" method="post">
                          {/* Google Sign-In button code */}
                      </form>
                  </div>
                  {/* <hr className="divider sign-in" /> */}
                  <div className="auth-form sign-in-form">
                      <form onSubmit={handleFormSubmit}>
                          <label htmlFor="email">Email</label>
                          <input
                  type="email"
                  id="remail"
                  name="remail"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="rounded-input my-2"
                  style={{fontWeight:'bold'}}
              />
              <label htmlFor="password">Password</label>
              <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="rounded-input my-2"
                  value={password}
                  id='rpassword'
                  name='rpassword'
                  onChange={(e) => setPassword(e.target.value)}
                  style={{fontWeight:'bold'}}
              />
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                  type="password"
                  placeholder="Enter Your Password Again"
                  className="rounded-input my-2"
                  value={confirmpassword}
                  id='rconfirmpassword'
                  name='rconfirmpassword'
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  style={{fontWeight:'bold'}}
              />
              <label htmlFor="firstname">First Name</label>
              <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                  className="rounded-input my-2"
                  style={{fontWeight:'bold'}}
              />
              <label htmlFor="lastname">Last Name</label>
              <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Last Name"
                  className="rounded-input my-2"
                  style={{fontWeight:'bold'}}
              />
              {showSecretKey === true ? (
                  <>
              <label htmlFor="secretkey">Secret Key</label>
              <input
              type="password"
              placeholder="Secret key"
              className="rounded-input my-2"
              value={secretkey}
              id='secretkey'
              name='secretkey'
              onChange={(e) => setSecretKey(e.target.value)}
              style={{fontWeight:'bold'}}
          />
          </>
              ):(<>
              <label htmlFor="enrollmentnumber">Enrollment Number</label>
              <input
                      type="text"
                      id="enrollmentnumber"
                      name="enrollmentnumber"
                      value={enrollmentnumber}
                      onChange={(e) => setEnrollmentNumber(e.target.value)}
                      placeholder="Enter Enrollment Number"
                      className="rounded-input my-2"
                      style={{fontWeight:'bold'}}
                  />
              </>)}
                      </form>
                      {/* <button onClick={handleCheckState} className='btn2 btn2--large btn2--full-width margin-t-20 btncustom' type="submit"><strong>Register</strong></button> */}
                      <button
                          onClick={handleCheckState}
                          className='btn2 btn2--large btn2--full-width margin-t-20 btncustom'
                          type="submit"
                          disabled={loading} // Disable the button when loading
                      />
                          {/* {loading ? (
                              <ClipLoader color={'#4285f4'} loading={true} size={35} />
                          ) : (
                              <strong>Register</strong>
                          )}
                      </button> */}
                  </div>
              </div>
          </main>
      </section>
  </div>        )
}

const InputBox = ({ type, placeholder, name }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
      />
    </div>
  );
};
