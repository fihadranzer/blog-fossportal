// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaImage } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-6 mt-5">
      <div className="bg-white gap-x-3 p-6 rounded flex justify-center items-center">
        <div>
          <label
            htmlFor="img"
            className={` w-[15rem] h-[15rem] rounded text-[#404040] gap-2 flex justify-center items-center cursor-pointer border-2 border-dashed`}>
            <div className="flex justify-center items-center flex-col gap-y-2">
              <span>
                <FaImage className="text-[2.4rem]" />
              </span>
              <span className="text-[1.6rem]">Select Image</span>
            </div>
          </label>
          <input className="hidden" type="file" name="img" id="img" />
        </div>
        
        <div className="text-[#404040] flex flex-col gap-y-1 justify-center items-start text-[1.6rem]">
          <span>Name : Arfan Chowdhury </span>
          <span>Email: arfan@gmail.com</span>
          <span>Category : Education </span>
        </div>
      </div>
      <div className="bg-white gap-x-3 px-6 py-4 text-[#404040]">
        <h2 className="pb-3 text-center text-[2rem]">Change Password</h2>

        <form>
          <div className="grid grid-cols-1 gap-y-8 mb-5 mt-8">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1.6rem] font-medium text-gray-600"
                htmlFor="old_password">
                Old password
              </label>
              <input
                id="old_password"
                name="old_password"
                type="old_password"
                placeholder="Old password"
                className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1.6rem] font-medium text-gray-600"
                htmlFor="new_password">
                new password
              </label>
              <input
                id="new_password"
                name="new_password"
                type="new_password"
                placeholder="new password"
                className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="px-3 py-[.6rem] bg-purple-600 text-white rounded-sm text-[1.6rem] hover:bg-purple-700">
              Add Writer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
