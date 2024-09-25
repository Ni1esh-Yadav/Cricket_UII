import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Men.css";
import { useNavigate } from "react-router-dom";


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
const Men = () => {
  const navigate = useNavigate();

  function onEnroll(){
    navigate("/RegistrationForm")
  }

  // GSAP animation effect for parallax
  useEffect(() => {
    // Loop through each section to apply parallax effect
    gsap.utils.toArray(".parallax-section").forEach((section, i) => {
      gsap.fromTo(
        section.querySelector(".content"),
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:false, // set to true for debugging
          },
        }
      );
    });
  }, []);
  

  return (
    <div className="parallax-container">
      {/* Section 1 */}
      <div
        className="parallax-section bg-cover bg-fixed h-screen"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/01/27/04/51/sport-4796426_1280.jpg')",
        }}
      >
        <div className="content text-center text-black font-bold">
          <h1 className="text-5xl font-bold">T-20</h1>
          <p className="mt-4 text-xl w-1/2 mx-auto bg-slate-400 bg-transparent bg-opacity-65 text-black">
            Experience the thrill of fast-paced cricket with MCA's T20
            tournaments! Each match lasts only 20 overs per side, making it an
            action-packed format full of big hits and quick wickets. It's the
            perfect format for players and fans who crave high-energy,
            entertaining cricket. Whether you're a power hitter or a death-over
            specialist, T20 is where excitement meets skill!
          </p>
          <button onClick={onEnroll} className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            T-20 Enroll
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className="parallax-section bg-cover bg-fixed h-screen"
        style={{
          backgroundImage:
            "url('https://4kwallpapers.com/images/walls/thumbs_3t/17540.jpeg')",
        }}
      >
        <div className="content text-center text-white">
          <h1 className="text-5xl font-bold">ODI</h1>
          <p className="mt-4 text-xl w-1/2 mx-auto bg-slate-400 bg-transparent bg-opacity-65 text-black">
            MCA's ODI tournaments bring the classic 50-over format to life. This
            format tests both strategy and stamina as teams balance aggression
            with endurance over 100 overs. ODI cricket is a perfect blend of
            skill and planning, where team strategies evolve as the game
            progresses, giving players a chance to showcase their all-round
            abilities.
          </p>
          <button onClick={onEnroll} className="mt-6 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700">
            ODI Enroll
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="parallax-section bg-cover bg-fixed h-screen"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/04/15/21/06/cricket-724622_1280.jpg')",
        }}
      >
        <div className="content text-center text-white">
          <h1 className="text-5xl font-bold">Test</h1>
          <p className="mt-4 text-xl w-1/2 mx-auto bg-slate-400 bg-transparent bg-opacity-65 text-black">
            Get ready for the ultimate test of skill, patience, and endurance
            with MCA's Test cricket tournaments. This timeless format, spanning
            up to five days, challenges cricketers to perform consistently in
            both batting and bowling. Test cricket is for the purists who
            appreciate the art of the game, where the finest skills are honed
            over long sessions of play
          </p>
          <button onClick={onEnroll} className="mt-6 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-700">
            Test Enroll
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="parallax-section bg-cover bg-fixed h-screen"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2013/07/25/11/58/cricket-166906_640.jpg')",
        }}
      >
        <div className="content text-center text-white">
          <h1 className="text-5xl font-bold">T-10</h1>
          <p className="mt-4 text-xl w-1/2 mx-auto bg-slate-400 bg-transparent bg-opacity-65 text-black">
            Short, sharp, and exhilarating! MCA's T10 tournaments are the newest
            addition to the cricketing world, offering matches where each side
            faces just 10 overs. It's a race against time where every ball
            counts. With T10, expect explosive performances, as batsmen aim for
            boundaries and bowlers look for quick wickets in this high-octane
            format.
          </p>
          <button onClick={onEnroll} className="mt-6 bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-700">
            T10 Enroll
          </button>
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="parallax-section bg-cover bg-fixed h-screen"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/04/15/21/06/cricket-724614_640.jpg')" }}
      >
        <div className="content text-center text-white">
          <h1 className="text-5xl font-bold">Domestic</h1>
          <p className="mt-4 text-xl w-1/2 mx-auto bg-slate-400 bg-transparent bg-opacity-65 text-black">
            MCA's Domestic Cricket tournaments are designed to nurture local
            talent and provide a platform for emerging cricketers to showcase
            their skills. With a strong focus on regional teams, domestic
            matches allow players to gain valuable experience and exposure in
            competitive environments. Whether it's T20, ODI, or Test formats,
            our domestic competitions are the breeding ground for future stars,
            contributing to the growth and development of cricket at the
            grassroots level.
          </p>
          <button onClick={onEnroll} className="mt-6 bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-700">
            Domestic Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default Men;
