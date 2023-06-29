import React from "react";
import { Link } from "react-router-dom";
import SolarImg from "../assert/ServicesImg/Solar/solarImg.png";

const Solar = () => {
  return <div name="solar"
  className="w-full md:h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white" >
  
  <div className="md: h-full max-w-screen-lg w-full flex flex-col p-4 mx-auto">
  <div>
  <p className="pb-20"><Link to="/services">Services</Link>/Solar</p>
  <div className="md:flex">
  <div>
  <img 
    src={SolarImg}
    alt="Solar"
    className="object-cover h-80 pb-10"
  />
  </div>
  <div className="pl-20">
    <h1 className="text-5xl pt-6">Renewable Energy</h1>
    <p className="font-signature text-2xl py-6">We Are Your Turnkey Solar Installer</p>
    <p>We speak in Savings and Sustainability. Present the complete Return on Roof your property 
    can provide with Solar. Achieve impressive energy savings, property appreciation, a 
    potential revenue stream and company integrity.</p>
  </div>
  </div>
  
  
  </div>
 
  </div>
  
  </div>;
};

export default Solar;