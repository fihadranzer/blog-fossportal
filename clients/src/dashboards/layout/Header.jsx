/* eslint-disable no-unused-vars */
import React from "react";
import profile from "../../assets/profile.jpg";
const Header = () => {
  return (
    <div className="pl-4 fixed w-[calc(100vw-25rem)] top-4 z-50">
      <div className="w-full rounded h-[7rem] flex justify-between items-center p-4 bg-white">
        <input
          type="text"
          placeholder="Search"
          className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
        />

        <div className="mr-4">
          <div className="flex gap-x-4">
            <div className="flex flex-col justify-center items-end text-[1.4rem]">
              <span>Sheikh Farid</span>
              <span>admin</span>
            </div>
            <img
              src={profile}
              alt="profile"
              className="h-[4rem] w-[4rem] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
