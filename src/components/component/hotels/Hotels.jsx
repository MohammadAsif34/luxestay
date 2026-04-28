import React, { useEffect, useState } from "react";
import default_room from "../../../../public/default/default_room.jpg";
import { rooms } from "../../../dataset/rooms.js";
import { Link } from "react-router-dom";
import { encrypt } from "../../../utils/encrypt.js";

const default_filterItem = [
  { _id: 1, type: "room_type", name: "single bed room", selected: false },
  { _id: 1, type: "room_type", name: "double bed room", selected: false },
  { _id: 1, type: "room_type", name: "family suite", selected: false },
  { _id: 1, type: "room_type", name: "luxury room", selected: false },
  { _id: 1, type: "room_type", name: "sweet room", selected: false },
  { _id: 1, type: "price_range", name: "0 to 500", selected: false },
  { _id: 1, type: "price_range", name: "500 to 1000", selected: false },
  { _id: 1, type: "price_range", name: "1000 to 2000", selected: false },
  { _id: 1, type: "price_range", name: "2000 to 3000", selected: false },
  { _id: 1, type: "sort", name: "price low to high", selected: false },
  { _id: 1, type: "sort", name: "price high to low", selected: false },
  { _id: 1, type: "sort", name: "newest first", selected: false },
];
const Hotels = () => {
  const [filterItem, setFilterItem] = useState(default_filterItem);
  //   const [mainImg, setMainImg] = useState(room.picture[0]);

  const handleFilterClick = (name) => {
    setFilterItem((prevItems) =>
      prevItems.map((f) => ({
        ...f,
        selected: f.name === name,
      })),
    );
  };
  return (
    <>
      <section className="px-[10%] py-8">
        <p className=" text-gray-400">home / hotels</p>
        <div className="flex flex-row-reverse gap-10">
          {/* ===========  hotels filter  ===========  */}
          <div className="w-full h-fit flex-1  border-2 text-sm border-gray-300 rounded-sm sticky top-18 right-0">
            <p className="p-3 uppercase text-lg border-b-2 border-gray-300 ">
              filters
              <button
                type="button"
                onClick={() => setFilterItem(default_filterItem)}
                className="float-end text-sm capitalize text-gray-500"
              >
                clear
              </button>
            </p>
            <div className="py-3 px-6 capitalize">
              {/* room types  */}
              <h3 className="my-2 font-medium  text-[16px]">Rooms Types</h3>
              {filterItem
                .filter((f) => f.type == "room_type")
                .map((f, idx) => (
                  <div
                    key={f._id || idx}
                    className="py-1 flex items-center gap-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={f.selected}
                      onChange={() => handleFilterClick(f.name)}
                    />
                    <label htmlFor="">{f.name}</label>
                  </div>
                ))}

              {/* price range  */}
              <h3 className="my-2 font-medium capitalize text-[16px]">
                Price range
              </h3>
              {filterItem
                .filter((f) => f.type == "price_range")
                .map((f, idx) => (
                  <div
                    key={f._id || idx}
                    className="py-1 flex items-center gap-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={f.selected}
                      onChange={() => handleFilterClick(f.name)}
                    />
                    <label htmlFor="">$ {f.name}</label>
                  </div>
                ))}

              {/* sort type  */}
              <h3 className="my-2 font-medium capitalize text-[16px]">
                Sort by
              </h3>
              {filterItem
                .filter((f) => f.type == "sort")
                .map((f, idx) => (
                  <div
                    key={f._id || idx}
                    className="py-1 flex items-center gap-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={f.selected}
                      onChange={() => handleFilterClick(f.name)}
                    />
                    <label htmlFor="">{f.name}</label>
                  </div>
                ))}
            </div>
          </div>

          {/*  ===========  Hotels list  =========== */}
          <div className="flex-3 ">
            <h2 className=" mt-4 text-3xl text-gray-500 font-medium">
              Hotels Rooms
            </h2>
            <p className="w-3/4 py-2 text-sm  text-gray-400 font-light">
              Enjoy our exclusive, limited-time packages designed to elevate
              your stay. Book now to secure special savings and create truly
              unforgettable memories with us.
            </p>
            <div className="py-4 ">
              {rooms.map((room, idx) => (
                <div
                  key={room._id || idx}
                  className="py-4 border-b-2 border-gray-200 grid grid-cols-2 gap-6"
                >
                  {/* =========== room images =========== */}
                  <div className=" grid grid-cols-[3fr_1fr] gap-2">
                    {[...Array(4)].map((img, idx) => {
                      let imageSrc = room?.picture?.[idx] || default_room;
                      return (
                        <>
                          <div
                            className={`border border-gray-300 rounded-2xl overflow-hidden ${idx == 0 ? "row-span-3 wc-80 h-full " : "w -25 h-16 border-dashed"}`}
                          >
                            {/* <img
                              src={imageSrc}
                              loading="lazy"
                              fetchPriority="auto"
                              onClick={() => {
                                if (idx !== 0 && room?.picture?.[idx]) {
                                  imageSrc = room.picture[idx];
                                }
                              }}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            /> */}
                            <PreloadedImage src={imageSrc} />
                          </div>
                        </>
                      );
                    })}
                  </div>

                  {/* =========== rooms info =========== */}
                  <div className="space-y-2 ">
                    <p className="text-sm text-gray-400 capitalize">city</p>
                    <p className="font-medium text-2xl">
                      {room?.name || "Room name"}
                      <span className="text-sm px-4 font-normal">
                        ( {room.type} )
                      </span>
                    </p>
                    <p className="text-gray-400 text-sm">
                      <i className="fa-solid fa-location-dot mr-2 text-gray-600"></i>
                      {room.location || "location-icon GramBell Road , Delhi"}
                    </p>

                    {/* rating  */}
                    <p className="space-x-0.5">
                      {[...Array(5)].map((i, idx) => (
                        <i
                          className={`${room.rating >= idx + 1 ? "fa-solid " : "fa-regular"} fa-star text-orange-300`}
                        ></i>
                      ))}
                      <span className="px-3 text-gray-500">(20+ reviews)</span>
                    </p>

                    {/* services  */}
                    <div className="flex gap-2 text-sm text-gray-700 flex-wrap max-h-18 overflow-hidden">
                      {room.service.map((i, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 bg-gray-200 rounded-md"
                        >
                          {i}
                        </div>
                      ))}
                    </div>

                    {/* room price  */}
                    <p className="pt-2 text-xl font-medium">
                      $ {room.price}{" "}
                      <span className="text-sm font-normal text-gray-400">
                        /night
                      </span>
                      <Link
                        to={`room/${encrypt(room._id)}`}
                        className="float-end px-8 py-2 bg-teal-500 rounded-md text-white text-sm hover:bg-teal-600 cursor-pointer"
                      >
                        {" "}
                        Check
                      </Link>
                    </p>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotels;

const PreloadedImage = ({
  src,
  placeholder,
  className,
  alt = "Hotel Room",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    // 1. Create a "Ghost" image in memory
    const img = new Image();
    img.src = src;

    // 2. When the ghost image finishes downloading...
    img.onload = () => {
      setCurrentSrc(src); // Swap to the real URL
      setIsLoaded(true); // Trigger the fade-in effect
    };
  }, [src]); // Re-run if the URL changes (e.g., when clicking a thumbnail)

  return (
    <div className={`h-full relative overflow-hidden ${className}`}>
      {/* The visible image (fades from placeholder to real) */}
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
          isLoaded ? "opacity-100 scale-100" : "opacity-50 scale-105 blur-md"
        }`}
      />

      {/* Optional: Subtle loading spinner if not loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
