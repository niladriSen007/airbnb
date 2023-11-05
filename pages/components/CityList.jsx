import React, { useState } from "react";
import { BiSolidUpArrow,BiSolidDownArrow } from "react-icons/bi";

const cities = [
  {id:1,city:"Bangalore",areas:[],isDropDown:false},
  {id:2,city:"Chennai",areas:[],isDropDown:false},
  {id:3,city:"Delhi",areas:[],isDropDown:false},
  {id:4,city:"Gurgaon",areas:[],isDropDown:false},
  {id:5,city:"Hyderabad",areas:[],isDropDown:false},
  {id:6,city:"Kolkata",areas:[],isDropDown:false},
  {id:7,city:"Mumbai",areas:[],isDropDown:false},
  {id:8,city:"Noida",areas:[],isDropDown:false},
  {id:9,city:"NoidPunea",areas:[],isDropDown:false},
];




const CityList = () => {


  const [items,setItems] = useState(cities)
  const [dd, setDd] = useState(false);

  const toggleDropdown = (itemId) => {
    setItems((prevItems) =>
    prevItems.map((item) =>
    item.id === itemId ? { ...item, isDropDown: !item.isDropDown } : item
    )
    );
  };

  return (
    <div className="flex items-center justify-between px-16 h-6  bg-violet-200">
      {items.map((city, index) => {
        return (
          <div
            key={city?.id}
            className="flex items-center gap-1 cursor-pointer text-black"
            // onMouseOver={() => setDd(!dd)}
            onClick={()=>toggleDropdown(city?.id)}
          >
            <span>{city?.city}</span>
            {city?.isDropDown ? (
              <span className="text-lg font-bold"><BiSolidUpArrow color="purple"/></span>
            ) : (
              <span>
                <BiSolidDownArrow color="purple"/>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CityList;
