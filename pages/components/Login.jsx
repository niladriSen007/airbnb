import React from "react";

const Login = ({
  loginForm,
  setLoginForm,
  showLoginForm,
  setShowLoginForm,
  popupRef,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div
      className={`w-full absolute h-[88vh] transform transition-transform duration-300  delay-700 flex items-center justify-center`}
      style={{ backgroundColor: "#000000a7" }}
    >
      <div ref={popupRef} className="w-[500px] h-[400px] bg-gray-300 relative ">
        <span
          className="absolute right-12 top-7 font-bold text-2xl cursor-pointer "
          onClick={() => setShowLoginForm(false)}
        >
          X
        </span>
        <div className="">
          <h1 className=" text-center text-3xl font-bold mt-6">Login</h1>
          <form
            className="flex flex-col gap-4 justify-center items-center mt-16"
            onSubmit={handleSubmit}
          >
            <input
              className="h-12 border-b-2 rounded-md border-gray-500  p-2"
              type="text"
              placeholder="Enter your user name"
              name="username"
              value={loginForm?.username}
              onChange={handleChange}
            />
            <input
              className="h-12 border-b-2 rounded-md border-gray-500 mb-6 p-2"
              type="text"
              placeholder="Enter your password"
              name="password"
              value={loginForm?.password}
              onChange={handleChange}
            />
            <button className="p-2 bg-red-600 rounded-md text-white font-bold w-24">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
