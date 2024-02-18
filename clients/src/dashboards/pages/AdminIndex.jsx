// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const AdminIndex = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-5 gap-x-5">
        <div className="w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-white text-slate-700 shadow-sm hover:shadow-md">
          <span className="text-[2rem] font-bold">22</span>
          <span className="text-[1.6rem] ">Total News</span>
        </div>
        <div className="w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-white text-slate-700 shadow-sm hover:shadow-md">
          <span className="text-[2rem] font-bold">0</span>
          <span className="text-[1.6rem] ">Pending News</span>
        </div>
        <div className="w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-white text-slate-700 shadow-sm hover:shadow-md">
          <span className="text-[2rem] font-bold">22</span>
          <span className="text-[1.6rem] ">Active News</span>
        </div>
        <div className="w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-white text-slate-700 shadow-sm hover:shadow-md">
          <span className="text-[2rem] font-bold">0</span>
          <span className="text-[1.6rem] ">Deactive news News</span>
        </div>
        <div className="w-full p-8 flex justify-center items-center flex-col rounded-md gap-y-2 bg-white text-slate-700 shadow-sm hover:shadow-md">
          <span className="text-[2rem] font-bold">7</span>
          <span className="text-[1.6rem] ">Writers News</span>
        </div>
      </div>
      <div className="bg-white p-4 mt-5">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-[2rem]">Recent News</h2>
          <Link className="text-[1.6rem]">View All</Link>
        </div>

        <div>
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
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
                  <tr className="bg-white border-b" key={i}>
                    <td className="px-[2rem] py-[1.6rem]">1</td>
                    <td className="px-[2rem] py-[1.6rem]">
                      This is Hello glass...
                    </td>
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
                    <td className="px-[2.4rem] py-[1.6rem]">
                      October 10, 2024
                    </td>
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
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminIndex;
