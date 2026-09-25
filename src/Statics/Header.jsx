import { Link } from "react-router-dom";

import { useState } from "react";
import logo from "../assets/logo.png";
import { Trash, Menu } from "lucide-react";
import Bin from "../component/ui/Bin";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBin, setOpenBin] = useState(false);
  return (
    <div className="flex justify-between  items-center py-4 px-4 font-bold text-base md:text-xl top-0 left-0 z-50 h-[70px] gap-2 max-lg:px-2 max-lg:text-sm">
      <div className="flex justify-between gap-6 items-center cursor-pointer ">
        <Menu
          className="font-bold text-xl hidden max-md:block md:hidden h-10 w-10 m-4 cursor-pointer z-50 relative"
          onClick={() => setOpenMenu(!openMenu)}
        />

        <div
          className={`fixed top-0 left-0 w-[80%] max-w-[300px] h-screen flex flex-col items-start  gap-4 font-semibold text-lg  z-[60] transition-all duration-300 ease-in-out ${openMenu
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
            }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            boxShadow: "4px 0 10px rgba(0,0,0,0.3)",
          }}
        >
          <div className="p-4 flex flex-col gap-3 justify-center items-start">

            <Link to="/" onClick={() => setOpenMenu(false)}> <nav>Home</nav></Link>
            <Link to="/about" onClick={() => setOpenMenu(false)}> <nav>About Us</nav> </Link>
            <Link to="/" onClick={() => setOpenMenu(false)}><nav>Tasks Board</nav> </Link>
            <button onClick={() => setOpenBin(true)} className="cursor-pointer">
              <Trash />
            </button>{" "}
            <Link to="/signup" onClick={() => setOpenMenu(false)}> Sign Up </Link>
            <Link to="/login" onClick={() => setOpenMenu(false)}>Log in</Link>
            <h2> Category:</h2>
            <Link to="/" onClick={() => setOpenMenu(false)}><nav>To do</nav></Link>
            <Link to="/" onClick={() => setOpenMenu(false)}><nav>In Progress</nav></Link>
            <Link to="/" onClick={() => setOpenMenu(false)}><nav>Completed</nav></Link>
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
        <button onClick={() => setOpenBin(true)} className="cursor-pointer">
          <Trash className="hover:bg-[#800000] py-2 h-10" />
        </button>
        {/* <Trash className=" hover:bg-[#800000]  py-2 h-10 " /> */}
        <div className="flex gap-5 cursor-pointer max-md:hidden">
          <Link to="/signup" onClick={() => setOpenMenu(false)} className="bg-[#800000] text-white px-5 py-2 rounded-lg">
            Sign-Up
          </Link>
          <Link to="/login" onClick={() => setOpenMenu(false)} className="bg-[#800000] text-white px-5 py-2 rounded-lg">
            Log-in
          </Link>
        </div>
      </div>
      {openBin && <Bin closeBin={() => setOpenBin(false)} />}
    </div>
  );
};

export default Header;
