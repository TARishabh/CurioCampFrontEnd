// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from './component/Navbar'
import Signin from "./pages/Signin";
// import Card from './component/Card'
// import Modal from './component/Modal'
import Hero from "./pages/Home";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Home from "./pages/Razorpay";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
// import ChatComponent from './pages/ChatComponent'
// import LiveStream from './pages/Agora'
import VideoCallComponent from "./pages/VideoCallComponent ";
import Dashboard from "./pages/Dashboard";
import PurchasedCourses from "./pages/PurchasedCourses";
import MCQpage from "./pages/MCQpage";
import VideoPage from "./pages/VideoPage";
import VideoCallComponent from './pages/VideoCallComponent '
import EditProfile from './pages/EditProfile'
import PurchasedCourses from './pages/PurchasedCourses'
import MCQ from './pages/MCQ'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pay" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/courses/:id/mcq" element={<MCQpage />} />
        <Route path="/courses/:id/video" element={<VideoPage />} />
        {/* <Route path="/chat" element={<ChatComponent />} /> */}
        {/* <Route path="/stream" element={<LiveStream />} /> */}
        <Route path="/livevideo" element={<VideoCallComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/purchasedcourses" element={<PurchasedCourses />} />
        <Route path="/mcqs" element={<MCQ />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
