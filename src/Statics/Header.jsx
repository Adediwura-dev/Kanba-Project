import { Link } from "react-router-dom";

import { useState } from "react";
import logo from "../assets/logo.png";
import { Trash, Menu } from "lucide-react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex justify-between  items-center py-4 px-4 font-bold text-base md:text-xl top-0 left-0 z-50 h-[70px] gap-2 max-lg:px-2 max-lg:text-sm">
      <div className="flex justify-between gap-6 items-center cursor-pointer ">
        <Menu
          className="font-bold text-xl hidden max-md:block md:hidden h-10 w-10 m-4 cursor-pointer z-50 relative"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <div
          className={`fixed top-0 left-0 w-[70%] max-w-[300px] h-screen flex flex-col items-start  gap-4 font-semibold text-lg  z-40 transition-all duration-300 ease-in-out ${
            openMenu
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            boxShadow: "4px 0 10px rgba(0,0,0,0.3)",
          }}
        >
          <div className="p-4 flex flex-col gap-3 justify-center items-start">
            <nav>Home</nav>
            <nav>About Us</nav>
            <nav>Tasks Board</nav>
            <Trash />
            <button>Sign Up</button>
            <button>Log in</button>
          </div>
        </div>
        <div className="">
          <img
            src={logo}
            className="max-w-[150px] min-h-[60px] max-lg: max-w-[120px] min-h-[40px]"
          />
        </div>
        <div className="flex gap-6 items-center cursor-pointer max-md:hidden ">
          <Link
            to="/"
            className="bg-white-500  hover:bg-[#800000] text-black font-bold py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="bg-white-500 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded"
          >
            About Us
          </Link>
          <Link
            to="/tasks"
            className="bg-white-500 hover:bg-[#800000] text-black font-bold py-2 px-4 rounded"
          >
            Tasks Board
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-6 cursor-pointer ">
        <Trash className=" hover:bg-[#800000]  py-2 h-10 " />
        <div className="flex gap-5 cursor-pointer max-md:hidden">
          <button className="bg-white text-black hover:bg-[#800000] hover:text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
          <button className="bg-white text-black hover:bg-[#800000] hover:text-white font-bold py-2 px-4 rounded">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
