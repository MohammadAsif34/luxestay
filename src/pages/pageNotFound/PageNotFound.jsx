import React from "react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="px-[20%] h-[60vh] flex flex-col justify-center items-center  ">
        <p className="py-4 font-extrabold text-6xl text-teal-500">404</p>
        <strong className="pb-6 text-3xl text-gray-400">Page not Found</strong>

        <Link to={"/"}>
          <Button>{"Home"}</Button>
        </Link>
        <button
          onClick={() => window.history.back()}
          className="border px-6 py-2 rounded-md cursor-pointer"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
