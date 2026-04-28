import React from "react";
import default_room from "../../../../public/default/default_room.jpg";

const MostPicked = () => {
  const item = [
    {
      id: 4,
      label: "Green Valley Stay",
      area: "Pune, Maharashtra",
      picture: "/bg-2.png",
      rate: 800,
    },
    {
      id: 5,
      label: "Sunset Villa",
      area: "Jaipur, Rajasthan",
      picture: "/bg-2.png",
      rate: 1200,
    },
    {
      id: 6,
      label: "Mountain Escape",
      area: "Manali, Himachal Pradesh",
      picture: "/bg-2.png",
      rate: 1800,
    },
    {
      id: 7,
      label: "Lake View Resort",
      area: "Udaipur, Rajasthan",
      picture: "/bg-2.png",
      rate: 2200,
    },
    {
      id: 8,
      label: "City Lights Hotel",
      area: "Delhi, Delhi",
      picture: "/bg-2.png",
      rate: 1500,
    },
    // {
    //   id: 9,
    //   label: "Beach Paradise",
    //   area: "Goa, Goa",
    //   picture: "/bg-2.png",
    //   rate: 2700,
    // },
    // {
    //   id: 10,
    //   label: "Royal Heritage Stay",
    //   area: "Hyderabad, Telangana",
    //   picture: "/bg-2.png",
    //   rate: 1300,
    // },
  ];
  return (
    <>
      <div className="px-[10%] py-10 ">
        <h2 className="font-medium text-gray-400 text-2xl">Most Picked</h2>
        <div className="mt-4 grid grid-cols-3 gap-6">
          {item.map((i, idx) => (
            <div
              key={i.id}
              className={`h-45 rounded-3xl overflow-hidden ${idx == 0 && "row-span-2 h-full"}`}
            >
              <img
                // src={"/default/default_room.jpg"}
                src={default_room}
                alt=""
                className=" w-full h-full object-center object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MostPicked;
