import React from "react";
import hero_img from "../../../../public/default/hero_img_1.png";

const Hero = () => {
  const item = [
    { id: 1, label: "users", icon: "suitcase-rolling", value: 2500 },
    { id: 2, label: "teasure", icon: "camera", value: 200 },
    { id: 3, label: "cities", icon: "map-location-dot", value: 100 },
  ];
  return (
    <>
      <div className="w-full h-[calc(100vh-64px)] px-[10%] ">
        <div className="h-4/5 bg -white flex">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-5xl font-bold tracking-wide py-6 text-gray-500">
              Forget Busy Work,
              <br /> Start New Vaccation
            </p>

            <p className=" w-2/5 text-md text-gray-400 py-4 ">
              we provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>

            <p className="w-fit my-4 py-2 px-8 rounded-xl text-white bg-teal-500 hover:bg-teal-600 cursor-pointer">
              Explore
            </p>

            <div className="flex space-x-8">
              {item.map((i) => (
                <div className="px-4 py-3 rounded-2xl bg-gray-100">
                  <i className={`fa-solid fa-${i.icon} text-xl mb-2`}></i>
                  <p className="text-xs space-x-1">
                    <strong cla>{i.value}</strong>
                    <span>{i.label}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center relative">
            <img
              src={hero_img}
              alt=""
              className="w-120 h-90 object-center object-cover -translate-8 rounded-3xl rounded-tl-[100px] z-10"
            />
            <div className="w-115 h-85 border-2 absolute translate-3 rounded-2xl text-gray-300 z-0 "></div>
          </div>
        </div>

        <div className="p-4 mt-2 rounded-3xl bg-gray-100 flex justify-end space-x-8">
          <div className="px-6 py-3 flex items-center bg-white rounded-xl shadow-sm">
            <i className="fa-solid fa-calendar-days text-xl mr-4"></i>
            <p>Check available</p>
          </div>
          <div className="px-6 py-3 flex items-center bg-white rounded-xl shadow-sm">
            <i className="fa-solid fa-user-group text-xl mr-4"></i>
            <p>Person</p>
          </div>
          <div className="px-6 py-3 flex items-center bg-white rounded-xl shadow-sm">
            <i className="fa-solid fa-map-location-dot text-xl mr-4"></i>
            <p>Select Location</p>
          </div>
          <button className="px-10  bg-teal-500 text-white hover:bg-teal-600 cursor-pointer rounded-2xl">
            Search
          </button>
          {/* <Button>{"Search"}</Button> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
