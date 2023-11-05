import React, { useState } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const cities = [
  {
    id: 1,
    city: "Bangalore",
    areas: [,
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 2,
    city: "Chennai",
    areas: [
      "Chennai Central Railway Station",
      "T Nagar",
      "Ecr East Coast Road",
      "Koyambedu",
      "Mount Road",
      "Ramapuram",
      "Porur",
      "Majestic",
      "Chennai Egmore Railway Station",
      "Anna Nagar",
      "Velachery",
    ],
    isDropDown: false,
  },
  {
    id: 3,
    city: "Delhi",
    areas: [
      "Paharganj",
      "Karol Bagh",
      "Janakpuri",
      "Dwarka, New Delhi",
      "Mahipalpur",
      "Indira Gandhi International Airport",
      "Saket",
      "Lajpat Nagar",
      "New Delhi Railway Station",
      "Rohini",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 4,
    city: "Gurgaon",
    areas: [
      "Popular Localities",
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 5,
    city: "Hyderabad",
    areas: [
      "Popular Localities",
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 6,
    city: "Kolkata",
    areas: [
      "Popular Localities",
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 7,
    city: "Mumbai",
    areas: [
      "Popular Localities",
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 8,
    city: "Noida",
    areas: [
      "Popular Localities",
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
  {
    id: 9,
    city: "Pune",
    areas: [
      "Popular Localities",
      "Koramangala",
      "Mg Road",
      "Rajaji Nagar",
      "Indiranagar",
      "Jayanagar",
      "Madiwala",
      "Majestic",
      "Yesvantpur Railway Station",
      "Marathahalli",
      "Hsr Layout",
    ],
    isDropDown: false,
  },
];

const CityList = () => {
  const [items, setItems] = useState(cities);
  const [dd, setDd] = useState(false);

  const toggleDropdown = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isDropDown: !item.isDropDown } : { ...item, isDropDown: false }
      )
    );
  };

  return (
    <div className="flex items-center justify-between px-16 h-6  bg-red-200">
      {items.map((city, index) => {
        return (
          <div
            key={city?.id}
            className="flex items-center gap-1 cursor-pointer text-black relative"
            // onMouseOver={() => setDd(!dd)}
            onClick={() => toggleDropdown(city?.id)}
          >
            <span>{city?.city}</span>
            {city?.isDropDown ? (
              <span className="text-lg font-bold">
                <BiSolidUpArrow color="red" />
              </span>
            ) : (
              <span>
                <BiSolidDownArrow color="red" />
              </span>
            )}
            {
              city?.isDropDown && (
                <div className="flex flex-col gap-2 items-start shadow-xl  absolute top-6 p-2 py-4 w-36  z-40 bg-white">
                    {
                      city?.areas?.map((c,index)=>{
                        return (
                          <div key={index} className="cursor-pointer ">
                              <span className= "text-sm hover:text-black hover:font-bold transition-all duration-300">{c}</span>
                          </div>
                        )
                      })
                    }
                </div>
              )
            }
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
