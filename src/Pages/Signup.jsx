import React, { useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const { currentUser, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen  ">
      <img
        className="fixed w-full h-full object-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />
      {/* OverLay */}
      <div className=" fixed top-0 left-0 w-full h-screen "></div>
      <div className="fixed w-full px-4 py-24 z-50  ">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 text-white ">
          <div className="max-w-[320px] mx-auto py-16 ">
            <h1 className="text-3xl font-bold">SignUp</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                className="p-3 my-2 bg-gray-700 rounded "
                type="email"
                placeholder="email"
              />
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                className="p-3 my-2 bg-gray-700 rounded "
                type="password"
                placeholder="password"
              />
              <button className="bg-red-600 rounded py-3 my-6 font-bold">
                SignUp
              </button>
              <div className="flex justify-between items-center text-sm text-gray-600 ">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help</p>
              </div>
              <p
                onClick={() => {
                  navigate("/login");
                }}
                className="py-4 cursor-pointer"
              >
                <span className="text-gray-600">
                  Already subscribed to Netflix?
                </span>
                Sign In
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
