import React from "react";
import manstandingupsvgrepocom from "../assests/img/man-standing-up-svgrepo-com.svg";
import women from "../assests/img/women-solid-svgrepo-com.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Navigate, useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger); 

gsap.registerPlugin(ScrollTrigger) 
const Sex = () => {
const navigate = useNavigate();
    useGSAP(()=>{
        gsap.from(".scroll-sex",{
            opacity:0,
            duration:2,
            scrollTrigger: {
              trigger: ".scroll-sex", // Element that triggers the animation
              start: "top 80%",        // Animation starts when the top of the trigger element hits 80% of the viewport height
              end: "top 30%",          // Animation ends when the top reaches 30% of the viewport
              scrub: true,             // Smoothly animate as the user scrolls
            }
        })
    })
  return (
    <div className="scroll-sex h-screen w-full">
      <div className="flex flex-col justify-center items-center p-20 bg-[url('../assests/img/moss_wood_diff_4k.jpg')] h-screen w-full">
        <h1 className=" text-anime  p-5 text-center text-white font-bold w-full text-xl">
          <span>One</span> <span>Team</span>,<span> One Dream,</span><span> One</span> <span> Victory!</span>
        </h1>
        <div className="flex w-full justify-center ">
          <div className="flex flex-col p-8">
            <button> <img src={manstandingupsvgrepocom} className="h-44 m-4 p-4 hover:bg-green-600 hover:bg-opacity-45 hover:rounded-3xl hover:scale-105 cursor-pointer" onClick={()=>navigate("/Men")} /></button>
           {/* <img src={manstandingupsvgrepocom} className="h-44 m-4 p-4 hover:bg-green-600 hover:bg-opacity-45 hover:rounded-3xl hover:scale-105 cursor-pointer" /> */}
            {/* <button className="text-2xl hover:bg-opacity-45 text-white rounded-full border p-2 hover:bg-green-600" onClick={()=>navigate("/Men")}>Men</button> */}
          </div>
          <div className="flex flex-col p-8 ">
            <button>
            <img src={women} className="h-44 m-4 p-4 hover:bg-green-600 hover:bg-opacity-45 hover:rounded-3xl hover:scale-105 cursor-pointer"onClick={()=>navigate("/Women")} />
            </button>
            {/* <img src={women} className="h-44 m-4 p-4 hover:bg-green-600 hover:bg-opacity-45 hover:rounded-3xl hover:scale-105 cursor-pointer" />
            <button className="text-2xl text-white rounded-full border p-2 hover:bg-opacity-45 hover:bg-green-600 " >Women</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sex;
