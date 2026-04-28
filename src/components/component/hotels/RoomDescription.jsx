import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { rooms } from "../../../dataset/rooms.js";
import { decrypt, encrypt } from "../../../utils/encrypt.js";
import default_room from "../../../../public/default/default_room.jpg";

const RoomDescription = () => {
  const [seemore, setSeemore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [calender, setCalender] = useState(false);

  const { id } = useParams();
  const room = rooms.find((room) => room._id === decrypt(id));

  if (!room) return <Navigate to={"a"} replace />;

  // Mock data for the example - in a real app, this comes from your DB
  const days = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    status: i < 10 ? "expired" : i % 3 === 0 ? "not_available" : "available",
    seats: i % 3 === 0 ? 0 : Math.floor(Math.random() * 5) + 1,
  }));

  const getStatusClasses = (status) => {
    switch (status) {
      case "available":
        return "bg-green-500 text-white";
      case "not_available":
        return "bg-red-500 text-white";
      case "expired":
        return "bg-gray-300 text-gray-500 cursor-not-allowed";
      default:
        return "bg-white";
    }
  };

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    setCalender(true);
    setLoading(false);
  };

  return (
    <div className="px-[10%] py-8 ">
      <div className="flex gap-8">
        <div className="flex-3">
          {/* room pictures  */}
          <div className=" grid grid-cols-4 gap-2 justify-center">
            {[...Array(5)].map((img, idx) => {
              let imageSrc = room?.picture?.[idx] || default_room;
              return (
                <>
                  <div
                    className={`border border-gray-300 rounded-2xl overflow-hidden 
                        ${idx == 0 ? "h-100 col-span-4 " : "h-28  border-dashed"}
                    `}
                  >
                    <PreloadedImage src={imageSrc} />
                    {/* <img
                      src={imageSrc}
                      loading="eager"
                      onClick={() => {
                        if (idx !== 0 && room?.picture?.[idx]) {
                          imageSrc = room.picture[idx];
                        }
                      }}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    /> */}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="flex-2 px-4 ">
          {/* =========== rooms info =========== */}
          <div className="space-y-4 ">
            <p className="text-md text-gray-400 capitalize">city</p>
            <p className="font-medium text-4xl">
              {room?.name || "Room name"}
              <span className="text-sm px-4 font-normal">( {room.type} )</span>
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
            <div className="flex gap-2 text-sm text-gray-700 flex-wrap grow shrink max-h-28 overflow-hidden">
              {room.service.map((i, idx) => (
                <div
                  key={i._id || idx}
                  className="px-3 py-1 bg-gray-200 rounded-md"
                >
                  {i}
                </div>
              ))}
            </div>
            {/* servie info */}
            <div
              className={`w-full text-justify text-gray-500 transition-transform duration-200 ease-in-out `}
            >
              <p
                className={` transition-all duration-300 ease-in-out ${!seemore && "line-clamp-4"}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium molestias repudiandae doloribus et facere. Possimus
                dolores velit doloribus saepe, rerum quo quae suscipit ratione
                iure quam voluptatibus consequuntur delectus facilis impedit sed
                assumenda veniam accusantium illum vel aliquam harum totam
                laborum hic. Tempora vel asperiores eius nesciunt fugiat
                exercitationem dolorem.
              </p>
              <button
                className="float-end text-blue-500 cursor-pointer"
                onClick={() => setSeemore((p) => !p)}
              >
                see more
              </button>
            </div>
            {/* room price  */}
            <p className="py-4 mt-8 text-3xl font-medium">
              $ {room.price}{" "}
              <span className="text-xl font-normal text-gray-400">/night</span>
              {/* <Link
                to={encrypt(room._id)}
                className="float-end px-8 py-2 bg-teal-500 rounded-md text-white text-lg hover:bg-teal-600 cursor-pointer"
              >
                Check
              </Link> */}
            </p>
          </div>
          <div className="p-3 bg-gray-100 rounded-xl ">
            <form
              action=""
              className="flex justify-between items-center"
              onSubmit={handleCheckAvailability}
            >
              <div className="bg-white  rounded-md ">
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-full h-full py-2 px-6 "
                />
              </div>
              <button
                type="submit"
                className="w-40 px-4 py-2 bg-teal-500 rounded-md text-white hover:bg-teal-600 cursor-pointer disabled:cursor-progress"
                disabled={loading}
              >
                {loading ? "cheking..." : "Check Availability"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* calender Availability  */}
      {/* Calendar Grid */}
      {calender && (
        <div className="flex py-10 gap-8">
          <div className=" flex-1 max-w-sm   ">
            <div className=" p-4  grid grid-cols-7 gap-2 border border-gray-300 rounded-xl">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-bold text-gray-400 pb-2"
                >
                  {day}
                </div>
              ))}

              {days.map((day) => (
                <div
                  key={day.date}
                  className={`h-12 flex flex-col items-center justify-center rounded-lg text-sm font-medium transition-all cursor-pointer
                    ${getStatusClasses(day.status)}`}
                >
                  <span>{day.date}</span>
                  {day.status === "available" && (
                    <span className="text-[10px] opacity-90">
                      {day.seats} left
                    </span>
                  )}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="mt-6 flex justify-between text-xs font-semibold text-gray-600 px-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>{" "}
                Available
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div> Booked
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div> Past
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Link
              to={`/room/booking/${decrypt(id)}`}
              className="px-6 py-2 rounded-xl bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
      <RoomHighlights />
      <HotelDetailsPage />
    </div>
  );
};

export default RoomDescription;

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

import { ShieldCheck, Sparkles, MapPin, Key } from "lucide-react";

const RoomHighlights = () => {
  const highlights = [
    {
      id: "h1",
      title: "Clean & Safe Stay",
      description:
        "Experience a meticulously maintained and hygienic environment tailored for your comfort.",
      icon: <ShieldCheck className="w-6 h-6 text -green-600" />,
    },
    {
      id: "h2",
      title: "Enhanced Cleaning",
      description:
        "Our host strictly adheres to Staybnb's premium disinfection and safety protocols.",
      icon: <Sparkles className="w-6 h-6 text -blue-600" />,
    },
    {
      id: "h3",
      title: "Prime Location",
      description:
        "Situated in a top-tier neighborhood, highly praised by 90% of our recent travelers.",
      icon: <MapPin className="w-6 h-6 text -red-500" />,
    },
    {
      id: "h4",
      title: "Seamless Check-In",
      description:
        "Enjoy a stress-free arrival with a perfect 5-star rating for efficiency and ease.",
      icon: <Key className="w-6 h-6 text -amber-500" />,
    },
  ];

  return (
    <div className="flex py-8 gap-16 ">
      <div className="max-w-xl flex-1 space-y-4">
        {highlights.map((item) => (
          <div key={item.id} className="flex items-start gap-4 group">
            {/* Icon Container */}
            <div className="mt-1 shrink-0 transition-transform group-hover:scale-110">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-800 leading-none mb-1">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* Visual Divider */}
        <hr className="border-gray-100" />
      </div>
      <div className="flex-1 py-4">
        <h3 className="py-8 text-gray-700 text-3xl font-medium">
          Why Choose Us
        </h3>
        <p className="text-justify tracking-wide text-gray-500">
          Beyond just a room, we provide an ecosystem of comfort. Our service
          philosophy is built on 'Invisible Hospitality'—anticipating your needs
          before you even realize them. From the moment of your seamless
          check-in to the personalized touches in your suite, every detail is
          engineered to ensure your stay is effortless, safe, and truly
          unforgettable.
        </p>
      </div>

      {/* service provide details  */}
    </div>
  );
};
const HotelHeader = ({ name, rating, address }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 mb-1">
      <span className="bg-gold-500 text-white text-xs px-2 py-0.5 rounded font-bold">
        {rating} ★ Star Resort
      </span>
    </div>
    <h1 className="text-3xl font-extrabold text-gray-900">{name}</h1>
    <div className="flex items-center gap-1 mt-2 text-gray-600 text-sm">
      <span className="underline font-medium">
        {address.street}, {address.city}, {address.state}
      </span>
    </div>
  </div>
);
const TrustHighlights = ({ highlights }) => (
  <div className="py-6 border-y border-gray-100 my-6">
    <div className="grid gap-6">
      {highlights.map((item, idx) => (
        <div key={idx} className="flex gap-4">
          <div className="text-2xl">
            {/* Map your icon strings to actual icons here */}
            {item.icon === "Shield" ? "🛡️" : "📍"}
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
const PolicySection = ({ policy }) => (
  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
    <h3 className="font-bold text-lg">House Rules</h3>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <p className="text-gray-500 uppercase text-[10px] font-bold">
          Check-in
        </p>
        <p className="font-semibold text-gray-800">{policy.checkIn}</p>
      </div>
      <div>
        <p className="text-gray-500 uppercase text-[10px] font-bold">
          Check-out
        </p>
        <p className="font-semibold text-gray-800">{policy.checkOut}</p>
      </div>
    </div>
    <div className="pt-2 border-t border-gray-200">
      <p className="text-sm text-gray-700">
        <span className="font-bold">Cancellation:</span> {policy.cancellation}
      </p>
      <p className="text-sm text-gray-700 mt-1">
        <span className="font-bold">Pets:</span>{" "}
        {policy.petsAllowed ? "Allowed" : "No Pets"}
      </p>
    </div>
  </div>
);
const AmenitiesGrid = ({ amenities }) => (
  <div className="py-8">
    <h3 className="text-xl font-bold mb-6 text-gray-900">
      What this resort offers
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
      {amenities.map((amenity, idx) => (
        <div key={idx} className="flex items-center gap-3 text-gray-700">
          <div className="w-5 h-5 flex items-center justify-center bg-blue-50 text-blue-600 rounded-md">
            ✓
          </div>
          <span className="text-base">{amenity}</span>
        </div>
      ))}
    </div>
  </div>
);

const HotelDetailsPage = () => {
  const hotelDetail = {
    _id: "h_101",
    brandName: "Staybnb Luxe",
    propertyName: "Azure Horizon Resort & Spa",
    starRating: 5,
    description:
      "Experience a sanctuary of sophistication where modern luxury meets coastal tranquility. Located in the heart of Malibu, our resort offers panoramic ocean views, world-class dining, and a commitment to impeccable service.", // Location Details
    address: {
      street: "123 Pacific Coast Hwy",
      city: "Malibu",
      state: "California",
      zip: "90265",
      mapCoords: { lat: 34.0259, lng: -118.7798 },
    }, // Operational Info

    policy: {
      checkIn: "03:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation until 48 hours before stay",
      petsAllowed: true,
    }, // Trust & Safety Highlights

    highlights: [
      {
        title: "Clean & Safe",
        icon: "Shield",
        text: "Following premium hygiene standards.",
      },
      {
        title: "Prime Location",
        icon: "MapPin",
        text: "90% of guests loved the area.",
      },
    ], // Full Amenity List

    amenities: [
      "Infinity Pool",
      "Free WiFi",
      "Electric Car Charging",
      "Fitness Center",
      "Spa",
      "Private Beach Access",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
        {/* Left Column: Details */}
        <main>
          <HotelHeader
            name={hotelDetail.propertyName}
            rating={hotelDetail.starRating}
            address={hotelDetail.address}
          />

          <p className="text-gray-600 leading-relaxed mb-8">
            {hotelDetail.description}
          </p>

          <TrustHighlights highlights={hotelDetail.highlights} />
          <AmenitiesGrid amenities={hotelDetail.amenities} />
        </main>

        {/* Right Column: Sidebar / Booking Widget */}
        <aside className="space-y-6">
          <PolicySection policy={hotelDetail.policy} />
          <div className="p-6 border border-gray-200 rounded-2xl shadow-lg sticky top-6">
            <h4 className="font-bold mb-4">Ready to Book?</h4>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">
              Check Availability
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
