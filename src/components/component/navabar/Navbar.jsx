import React from "react";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = [
    { id: 1, label: "Home", link: "" },
    { id: 2, label: "Hotels", link: "/hotels" },
    { id: 3, label: "experience", link: "/#experience" },
    { id: 4, label: "About", link: "/about" },
    { id: 5, label: "Contact", link: "/#contact" },
  ];

  return (
    <>
      <nav className="w-full h-16 px-[10%] shadow-sm flex justify-between items-center sticky top-0 left-0 z-50 bg-white">
        <Link to={"/"} className="font-bold text-2xl tracking-wider ">
          <span className="text-gray-500">Luxe</span>
          <span className="text-teal-600">Stay</span>
        </Link>
        <div className="flex items-center space-x-8">
          {navItem.map((i) => (
            <>
              <Link
                key={i.id}
                to={i.link}
                className="relative group cursor-pointer"
              >
                <p>{i.label}</p>
                <span className="w-0 block absolute -bottom-1 left-0 h-1 bg-teal-500 group-hover:w-full transition-all duration-200 ease-in-out"></span>
              </Link>
            </>
          ))}
          <Link to={"/auth"}>
            <Button>{"Login"}</Button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
