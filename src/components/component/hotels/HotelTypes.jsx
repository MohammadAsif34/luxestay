import React from "react";
import default_room from "../../../../public/default/default_room.jpg";

const HotelTypes = () => {
  const hotels = [
    {
      id: 1,
      label: "Luxury Resort",
      area: "Goa, Goa",
      popular: true,
    },
    {
      id: 2,
      label: "Boutique Hotel",
      area: "Mumbai, Maharashtra",
      popular: true,
    },
    {
      id: 3,
      label: "Business Hotel",
      area: "Bengaluru, Karnataka",
      popular: false,
    },
    {
      id: 4,
      label: "Budget Hotel",
      area: "Kolkata, West Bengal",
      popular: false,
    },
    {
      id: 5,
      label: "Heritage Hotel",
      area: "Jaipur, Rajasthan",
      popular: true,
    },
    {
      id: 6,
      label: "Eco Resort",
      area: "Munnar, Kerala",
      popular: true,
    },
    {
      id: 7,
      label: "Capsule Hotel",
      area: "Delhi, Delhi",
      popular: false,
    },
    {
      id: 8,
      label: "Serviced Apartment",
      area: "Hyderabad, Telangana",
      popular: false,
    },
    // {
    //   id: 9,
    //   label: "Homestay",
    //   area: "Manali, Himachal Pradesh",
    //   popular: true,
    // },
    // {
    //   id: 10,
    //   label: "Private Villa",
    //   area: "Pune, Maharashtra",
    //   popular: false,
    // },
  ];
  return (
    <>
      <div className="px-[10%] py-10">
        <h2 className="font-medium text-gray-400 text-3xl">Our Services</h2>
        <div className=" mt-8 grid grid-cols-4 gap-6">
          {hotels.map((h, idx) => (
            <div key={h.id} className=" ">
              <div className="h-40 overflow-hidden rounded-2xl">
                <img src={default_room} alt="" className=" object-cover" />
              </div>
              <div className="py-2">
                <p className="font-normal text-lg">{h.label}</p>
                <p className="font-thin text-sm">{h.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelTypes;
