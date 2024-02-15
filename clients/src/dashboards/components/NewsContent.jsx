// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
const NewsContent = () => {
  return (
    <div>
      <div className="px-4 py-3 flex gap-x-3">
        <select
          name=""
          id=""
          className="px-3 text-[1.2rem] py-1  border rounded-md outline-0 border-gray-300 focus:border-green-500 h-14">
          <option value="">--- Select Type ---</option>
          <option value="pending">Pending</option>
          <option value="active">Active Type</option>
          <option value="deactive">Deactive Type</option>
        </select>

        <input
          type="text"
          placeholder="Search"
          className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
        />
      </div>

      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-[1.4rem] text-left text-slate-600">
          <thead className="text-[1.2rem] text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3">No</th>
              <th className="px-7 py-3">Title</th>
              <th className="px-7 py-3">Image</th>
              <th className="px-7 py-3">Category</th>
              <th className="px-7 py-3">Description</th>
              <th className="px-7 py-3">Date</th>
              <th className="px-7 py-3">Status</th>
              <th className="px-7 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-white border-b">
              <td className="px-[2rem] py-[1.6rem]">1</td>
              <td className="px-[2rem] py-[1.6rem]">This is Hello glass...</td>
              <td className="px-[2.4rem] py-[1.6rem]">
                <img
                  className="h-[4rem] w-[4rem]"
                  src="https://ik.imagekit.io/txh5evivcha5/Personal%20use/homemade-sushi-image_MdRVmIVDN.jpg?updatedAt=1697536473623"
                  alt="test-data"
                />
              </td>
              <td className="px-[2.4rem] py-[1.6rem]">Travel</td>
              <td className="px-[2.4rem] py-[1.6rem]">
                This is dummy description..
              </td>
              <td className="px-[2.4rem] py-[1.6rem]">October 10, 2024</td>
              <td className="px-[2.4rem] py-[1.6rem]">
                <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-[1.2rem] cursor-pointer">
                  Active
                </span>
              </td>
              <td className="px-[2.4rem] py-[1.6rem]">
                <div className="flex justify-start items-center gap-x-4 text-white">
                  <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                    <FaEye />
                  </Link>

                  <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yebg-yellow-500/50">
                    <FaEdit />
                  </Link>

                  <div className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                    <FaTrash />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsContent;
