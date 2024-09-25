import React, { useContext } from "react";
import logo from "../assests/img/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppContext } from "../context/AppContext";
import { IoTennisballSharp } from "react-icons/io5";
import Sidebar from "./Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

 
const NavBar = () => {
  const { isOpen, setOpen } = useContext(AppContext);
  const navigate = useNavigate();
  function onLogo(){
    navigate("/")
  }

  return (
    <div className="flex justify-between items-center w-full p-3 absolute top-0 left-0 z-10 bg-transparent">
      <img
        src={logo}
        alt="Logo"
        className="h-14 md:h-20 rounded-full hover:rotate-6 cursor-pointer z-20"
        onClick={onLogo}
      />
      {isOpen ? (
        <button className="hover:rotate-6 ml-2 top-0 z-20" onClick={()=>setOpen(!isOpen)}>
          <IoTennisballSharp size={40} color="black" />
        </button>
      ) : (
        <button className="hover:rotate-6 ml-2 top-0 z-20 "onClick={()=>setOpen(!isOpen)}>
          <GiHamburgerMenu size={40} color="black" />
        </button>
      )}
      {isOpen && <Sidebar />}
    </div>
  );
};

export default NavBar;
