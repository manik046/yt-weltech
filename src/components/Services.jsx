import React from "react";
import solar from "../assert/ServicesImg/solarSer.jpeg";
import ducting from "../assert/ServicesImg/ductingSer.webp";
import bms from "../assert/ServicesImg/BMSSer.webp";
import etp from "../assert/ServicesImg/ETPSer.jpeg";
import stp from "../assert/ServicesImg/STPSer.webp";
import { useNavigate } from "react-router";


const Services = () => {
   
  const navigate = useNavigate();

  const service = [
    {
      id: 1,
      src: solar,
      product: "solar",
      herf: "/solar"
      
    },
    {
      id: 2,
      src: ducting,
      product: "Ducting",
    },
    {
      id: 3,
      src: bms,
      product: "BMS",
    },
  ];
  return (
    <div
      name="services"
      className="w-full md:h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white"
    >
      <div className="max-w-screen-lg w-full h-full flex justify-center flex-col p-4 mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Services
          </p>
          <p className="py-6">Check out our Services</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0 w-full">
            {service.map(({ id, src, product, herf }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                <img
                  src={src}
                  alt=""
                  className="rounded-md hover:scale-105 duration-300"
                />

                <div className="flex justify-center items-center">
                  <button className="w-1/2 py-1 m-1 hover:scale-110 duration-300">
                    {product}
                  </button>
                  <button onClick={()=>navigate(herf)} className="w-1/2 py-1 m-1 hover:scale-110 duration-300">
                    Details
                  </button>
                
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
