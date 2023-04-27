import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  AOS.init();

  const { currentUser, logOut } = UserAuth();
  //console.log(currentUser);
  const navigate=useNavigate()

   const handleLogout=async()=>{
     try {
      await logOut()
      navigate('/login')
     } catch (error) {
      console.log(error)
     }
   }

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full ">
      <Link to="/">
        <h1
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="text-red-600 text-4xl font-bold cursor-pointer "
        >
          NETFLIX
        </h1>
      </Link>
      {currentUser ? (
        <button onClick={handleLogout} className="bg-red-600 px-6 py-2 cursor-pointer rounded ">
          LogOut
        </button>
      ) : (
        <div data-aos="fade-down-left">
            <button onClick={()=>{navigate('/login')}} className="text-white pr-4 ">Sign In</button>
            <button onClick={()=>{navigate('/signup')}} className="bg-red-600 px-6 py-2 cursor-pointer  ">
              SignUp
            </button>
         
        </div>
      )}
    </div>
  );
}

export default Navbar;
