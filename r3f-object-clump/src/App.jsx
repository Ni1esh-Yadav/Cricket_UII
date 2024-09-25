
import NavBar from "./Components/NavBar";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Outlet } from "react-router-dom";


export default function App() {

  return (
    <div className=" relative w-full h-screen">
    <NavBar/>
    <Outlet/>
      </div>
  );
}
