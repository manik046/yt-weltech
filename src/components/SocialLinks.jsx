import React from "react";
import { BsWhatsapp, BsCloudDownload } from "react-icons/bs";
import { FiMail, FiLogIn } from "react-icons/fi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Whatsapp <BsWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/8801749771939",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Mail <FiMail size={30} />
        </>
      ),
      href: "mailto:manik.m@weltech.com.bd",
    },
    {
      id: 3,
      child: (
        <>
          Download <BsCloudDownload size={30} />
        </>
      ),
      href: "/Weltech-Profile.pdf",
      download: true,
    },
    {
      id: 4,
      child: (
        <>
          LogIn <FiLogIn size={30} />
        </>
      ),
      href: "",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-cyan-700" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
