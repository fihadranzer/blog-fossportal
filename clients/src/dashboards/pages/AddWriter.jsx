// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const AddWriter = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-[2.4rem] font-medium">Add Writer</h2>

        <Link
          className="px-3 py-[.6rem] bg-purple-600 text-white rounded-sm text-[1.6rem] hover:bg-purple-700"
          to="/dashboard/writers">
          Writers
        </Link>
      </div>
      <div className="p-4">
        <form>
          <div className="grid grid-cols-2 gap-x-8 mb-5">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1.6rem] font-medium text-gray-600"
                htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1.6rem] font-medium text-gray-600"
                htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="px-3 text-[1.2rem] py-1  border rounded-md outline-0 border-gray-300 focus:border-green-500 h-14">
                <option value="">---select category---</option>
                <option value="education">Education</option>
                <option value="travel">Travel</option>
                <option value="health">Health</option>
                <option value="international">International</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 mb-5">
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1.6rem] font-medium text-gray-600"
                htmlFor="name">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="text-[1.6rem] font-medium text-gray-600"
                htmlFor="name">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
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

export default AddWriter;
