import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import CityList from "./components/CityList";
import Login from "./components/Login";
import ImageSlider from "./components/ImageSlider";
import Search from "./components/Search";
import { HotelContext } from "./context/store";

const Index = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const [hotelRooms, setHotelRooms] = useState(0);
  const [guest, setGuest] = useState(0);

  const [roomList, setRoomList] = useState([]);
  const defaultGuest = 1;

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const popupRef = useRef();

  console.log(popupRef);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(loginForm);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLoginForm(false);
      }
    };

    if (showLoginForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLoginForm]);

  return (
    <HotelContext.Provider
      value={{
        guest,
        setGuest,
        hotelRooms,
        setHotelRooms,
        roomList,
        setRoomList,
        defaultGuest
      }}
    >
      <div className="relative">
        <Navbar {...{ showLoginForm, setShowLoginForm }} />
        <CityList />
        {showLoginForm && (
          <Login
            {...{
              loginForm,
              setLoginForm,
              showLoginForm,
              setShowLoginForm,
              popupRef,
              handleChange,
              handleSubmit,
            }}
          />
        )}
        {/* <ImageSlider /> */}
        <Search />
      </div>
    </HotelContext.Provider>
  );
};

export default Index;
