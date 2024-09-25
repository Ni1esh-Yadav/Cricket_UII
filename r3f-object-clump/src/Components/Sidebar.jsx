import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Sidebar = () => {
  const { isOpen } = useContext(AppContext);

  return (
    <div 
      className={`h-screen bg-[url('../assests/img/moss_wood_diff_4k.jpg')] bg-center 
        bg-cover absolute z-10 text-white top-0 left-0 p-4 w-full md:w-full md:h-80 rounded-xl md:p-16
        transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        opacity-100 ${isOpen ? 'opacity-100' : 'opacity-0'}
        overflow-hidden`}
      style={{ transitionProperty: 'transform, opacity' }}
    >
      {/* Flexbox for responsive layout */}
      <div className="flex flex-wrap justify-between">
        {/* First Column */}
        <div className="p-4 md:p-6 w-full md:w-1/2 lg:w-1/5">
          <h1 className="font-bold cursor-pointer text-xl p-8 md:p-4">About</h1>
          <hr className="my-2" />
          <ul className="space-y-2 cursor-pointer hidden md:block">
            <li>History</li>
            <li>Annual Report</li>
            <li>MCC Laws Of Cricket</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="p-4 md:p-6 w-full md:w-1/2 lg:w-1/5">
          <h1 className="font-bold cursor-pointer text-xl p-8 md:p-4">Players</h1>
          <hr className="my-2" />
          <ul className="space-y-2 cursor-pointer hidden md:block">
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="p-4 md:p-6 w-full md:w-1/2 lg:w-1/5">
          <h1 className="font-bold cursor-pointer text-xl p-8 md:p-4">Format</h1>
          <hr className="my-2" />
          <ul className="space-y-2 cursor-pointer hidden md:block">
            <li>Test</li>
            <li>One Day</li>
            <li>T20</li>
            <li>Domestic</li>
            <li>T10</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div className="p-4 md:p-6 w-full md:w-1/2 lg:w-1/5">
          <h1 className="font-bold cursor-pointer text-xl p-8 md:p-4">MCA</h1>
          <hr className="my-2" />
          <ul className="space-y-2 cursor-pointer hidden md:block">
            <li>Copyright</li>
            <li>Terms & Condition</li>
            <li>Privacy and Policy</li>
          </ul>
        </div>

        {/* Fifth Column */}
        <div className="p-4 md:p-6 w-full md:w-1/2 lg:w-1/5">
          <h1 className="font-bold cursor-pointer text-xl p-8 md:p-4">Contact </h1>
          <hr className="my-2" />
          <ul className="space-y-2 cursor-pointer hidden md:block">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
