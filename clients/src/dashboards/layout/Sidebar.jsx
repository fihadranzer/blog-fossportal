// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { ImProfile } from "react-icons/im";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[25rem] h-screen fixed left-0 top-0 bg-white">
      <div className="h-[7rem] flex justify-center items-center">
        <Link to="/">
          <img
            className="w-[19rem] h-[3.5rem]"
            src="https://ik.imagekit.io/txh5evivcha5/blogfoss_test/logo_blog_test_s1CtVjjjF.png?updatedAt=1707903752121"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="px-3 flex flex-col gap-y-1 font-medium ">
        <li>
          <Link
            to="/dashboard/admin"
            className={`transition-all duration-300 text-[1.6rem] px-3 ${
              pathname === "/dashboard/admin"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6]"
            } py-2 hover:shadow-md hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="text-[2rem]">
              <AiFillDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/news"
            className={`transition-all duration-300 text-[1.6rem] px-3 ${
              pathname === "/dashboard/news"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6]"
            } py-2 hover:shadow-md hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="text-[2rem]">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/writer/add"
            className={`transition-all duration-300 text-[1.6rem] px-3 ${
              pathname === "/dashboard/writer/add"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6]"
            } py-2 hover:shadow-md hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="text-[2rem]">
              <AiOutlinePlus />
            </span>
            <span>Add Writer</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/writers"
            className={`transition-all duration-300 text-[1.6rem] px-3 ${
              pathname === "/dashboard/writers"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6]"
            } py-2 hover:shadow-md hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="text-[2rem]">
              <FiUsers />
            </span>
            <span>Writes </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className={`transition-all duration-300 text-[1.6rem] px-3 ${
              pathname === "/dashboard/profile"
                ? "bg-indigo-500 text-white"
                : "bg-white text-[#404040f6]"
            } py-2 hover:shadow-md hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
            <span className="text-[2rem]">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
