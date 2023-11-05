import Image from "next/image";
import React from "react";
const logo = "/images/abnb.png";
import { FaSellcast } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";

const navbarMenu = [
  {
    id: 1,
    icon: FaSellcast,
    title: "Become a Member",
    desc: "Additional 10% off on stays",
  },
  {
    id: 2,
    icon: MdBusinessCenter,
    title: "OYO for Business",
    desc: "Trusted by 5000 Corporates",
  },
  {
    id: 3,
    icon: BiSolidBusiness,
    title: "List your property",
    desc: "Start earning in 30 mins",
  },
  {
    id: 4,
    icon: AiFillPhone,
    title: "0124-6201611",
    desc: "Call us to Book now",
  },
  {
    id: 5,
    icon: BsGlobeAmericas,
    title: "English",
    desc: "Choose language",
  },
];



const Navbar = ({showLoginForm, setShowLoginForm}) => {
  return (
    <nav  className="relative flex items-center justify-between h-20 bg-white px-6 line-clamp-2">
      <div>
        <Image src={logo} width={140} height={140} alt="Airbnb" />
      </div>
      <div className="flex items-center gap-6">
        {navbarMenu?.map((nm, id) => {
          return (
            <div key={id} className="flex items-center gap-2 cursor-pointer">
              <div>
                <h1 className="cursor-pointer">
                  <nm.icon size={24} color="red" />
                </h1>
              </div>
              <div className="flex flex-col justify-center -gap-4">
                <span className="text-sm text-black font-extrabold">
                  {nm?.title}
                </span>
                <span className="text-xs text-gray-800">{nm?.desc}</span>
              </div>
            </div>
          );
        })}
        <button
          onClick={()=>setShowLoginForm(!showLoginForm)}
          className="bg-red-500 hover:bg-red-700 hover:font-semibold text-white px-4 py-1 rounded-md transition-all duration-300 ml-10 drop-shadow-xl"
        >
          Login/Sign up
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;
