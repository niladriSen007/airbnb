import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiTargetLock } from "react-icons/bi";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { HotelContext } from "../context/store";

const Search = () => {
  const {
    guest,
    setGuest,
    hotelRooms,
    setHotelRooms,
    roomList,
    setRoomList,
    defaultGuest,
  } = useContext(HotelContext);

  const date = Date.now();

  const [selectedStartDate, setSelectedStartDate] = useState(date);
  const [selectedEndDate, setSelectedEndDate] = useState(date);
  const [selectBooking, setSelectBooking] = useState(false);

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  return (
    <div className="w-full h-72 -mt-2 bg-gradient-to-r from-red-600 to-orange-700 flex flex-col gap-6 items-center justify-center">
      <h1 className="font-extrabold text-4xl text-white">
        Over 157,000 hotels and homes across 35 countries
      </h1>
      <div className="flex items-center">
        <div className="flex items-center justify-between bg-white w-[480px] px-2 rounded-sm border-r-2 border-gray-400">
          <input
            type="text"
            placeholder="Search by city, hotel or neighborhood"
            className="w-[360px] h-12 focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <BiTargetLock color="gray" />
            <span className="text-gray-600 font-light">Near me</span>
          </div>
        </div>

        <div className="flex items-center border-r-2 border-gray-400">
          {/* <input
            type="text"
            className="h-12"
            onClick={() => document.getElementById("date-picker").click()}
            value={selectedDate ? selectedDate.toLocaleDateString() : ""}
            readOnly
          /> */}
          <button
            id="date-picker1"
            style={{ display: "none" }}
            onClick={() => document.getElementById("date-picker1").blur()}
          />
          <div>
            <DatePicker
              className="h-12 w-32  focus:outline-none p-2 font-semibold"
              selected={selectedStartDate}
              onChange={handleStartDateChange}
              dateFormat="MM/dd/yyyy" // Customize date format as needed
            />
          </div>
          <span className="h-12  pr-4 bg-white flex items-center justify-center font-bold">
            -
          </span>
          <button
            id="date-picker2"
            style={{ display: "none" }}
            onClick={() => document.getElementById("date-picker2").blur()}
          />
          <div>
            <DatePicker
              className="h-12 w-32  focus:outline-none p-2 font-semibold"
              selected={selectedEndDate}
              onChange={handleEndDateChange}
              dateFormat="MM/dd/yyyy" // Customize date format as needed
            />
          </div>
        </div>

        <div
          className="flex h-12 bg-white items-center justify-center px-7 gap-6 relative cursor-pointer "
          onClick={() => {
            setSelectBooking(true);
            // setHotelRooms(1);
            // setGuest(guest + 1);
          }}
        >
          <span>{hotelRooms} rooms </span>
          <span> - </span>
          <span>{guest} guests</span>
          {selectBooking && (
            <div className="bg-white absolute top-14 left-0 w-56 p-4 shadow-lg z-50">
              <div className="flex items-center justify-between">
                <span>Rooms</span>
                <span>Guests</span>
              </div>
              <div>
                {roomList?.map((room, i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between my-2"
                    >
                      <span>Room {i + 1}</span>
                      <div className="flex items-center gap-1">
                        <AiOutlineMinusCircle className="cursor-pointer" onClick={()=>{
                          setGuest(guest > 1 ? guest -1 : 1)
                        }}/>
                        <span>{defaultGuest}</span>
                        <AiFillPlusCircle className="cursor-pointer" onClick={()=>{setGuest(guest+1)}}/>
                      </div>
                    </div>
                  );
                })}
                <button
                  className="p-2 py-1 rounded-sm bg-red-200 "
                  onClick={() => {
                    setRoomList((prev) => [...prev, `room - ${roomList?.length + 1}`]);
                    setHotelRooms(hotelRooms+1)
                  }}
                >
                  Add Room
                </button>
              </div>
            </div>
          )}
        </div>

        <button onClick={()=>{setSelectBooking(!selectBooking)}} className="h-12 bg-green-500 p-2 text-white font-bold w-32 rounded-r-sm">Search</button>
      </div>
    </div>
  );
};

export default Search;
