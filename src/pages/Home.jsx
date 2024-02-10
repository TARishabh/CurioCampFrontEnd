import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="m-20 p-20 flex-row">
        <Link className="px-10 mx-10 bg-slate-500" to="/signin">Signin</Link>
        <Link className="px-10 mx-10 bg-slate-500" to="/signup">Signup</Link>
      </div>
    </>
  );
};

export default Home;
