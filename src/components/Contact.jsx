import React from "react";
import Solar from "./Solar";
// import {Link} from 'react-router'

const Contact = () => {



  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-cyan-900 to-cyan-700 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Contact
          </p>
          <p className="py-6">Get in touch with us.</p>
        </div>
        <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-colorTrans border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Enter your mobile"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="my-2 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>
            <botton 
              className="text-white bg-gradient-to-r from-cyan-950 to-cyan-500
                                        flex items-center rounded-md px-6 py-3 my-8 mx-auto
                                        hover:scale-110 duration-300"
            >
              Let's talk
            </botton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact