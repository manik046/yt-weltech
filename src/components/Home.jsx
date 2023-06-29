import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assert/solar.jpg";
import { Link } from 'react-router-dom';
import Services from "./Services";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full bg-gradient-to-b from-cyan-900 via-cyan-900 to-cyan-700"
    >
      <div
        className="md:max-w-screen-lg w-full mx-auto flex
        flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white text-4xl sm:text-7xl font-bold">
            Welcome to solutions hub
          </h1>
          <p className="text-gray-400 px-4 max-w-md py-6">
            We specialize in Solar Energy, Ducting Systems, STP & ETP, and BMS &
            Automation. Discover the power of solar, optimize your airflow with
            our ducting expertise, ensure responsible waste management with our
            STP & ETP solutions, and streamline operations with our advanced BMS
            & Automation technologies. Experience the integrated excellence of
            Weltech's comprehensive offerings.
          </p>
          <div>
            <Link
              to="/services"
              smooth
              duration={500}
              className="group flex items-center text-white w-fit
                 px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-950 to-cyan-400
                 cursor-pointer"
            >
              Services
              <span className="ml-1 group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Weltech's Solutions"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
