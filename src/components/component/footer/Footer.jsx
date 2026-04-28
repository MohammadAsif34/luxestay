import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="border-t border-gray-100 bg-gray-100">
        <div className="px-[10%] py-10 ">
          <div className="font-bold text-3xl tracking-wider py-4">
            <span className="text-gray-500">Nexus</span>
            <span className="text-teal-600">Stay</span>
          </div>
          <p className="w-60 text-gray-400 font-light">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="px-[10%] mt-4 py-2 text-center font-light tracking-wide bg-teal-500 text-white flex justify-between">
          <span>copyright 22026 • All rights reserved</span>
          <span>Made with 💞 by Mohammad Asif</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
