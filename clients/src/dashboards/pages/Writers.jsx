// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
const Writers = () => {
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-[2.4rem] font-medium">Writers</h2>

        <Link
          className="px-3 py-[.6rem] bg-purple-600 text-white rounded-sm text-[1.6rem] hover:bg-purple-700"
          to="/dashboard/writer/add">
          Add Writer
        </Link>
      </div>
      <div className="p-4">
        <div className="mt-2">
          <div className="bg-white p-4 mt-5">
            <div>
              <div className="relative overflow-x-auto p-4">
                <table className="w-full text-[1.4rem] text-left text-slate-600">
                  <thead className="text-[1.2rem] text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="px-7 py-3">No</th>
                      <th className="px-7 py-3">Name</th>
                      <th className="px-7 py-3">Category</th>
                      <th className="px-7 py-3">Role</th>
                      <th className="px-7 py-3">Image</th>
                      <th className="px-7 py-3">Email</th>
                      <th className="px-7 py-3">Active</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n, i) => (
                      <tr className="bg-white border-b" key={i}>
                        <td className="px-[2rem] py-[1.6rem]">{i}</td>
                        <td className="px-[2rem] py-[1.6rem]">Sheikh Milon</td>
                        <td className="px-[2rem] py-[1.6rem]">Education</td>
                        <td className="px-[2.4rem] py-[1.6rem]">Head Writer</td>
                        <td className="px-[2.4rem] py-[1.6rem]">
                          <img
                            className="h-[4rem] w-[4rem]"
                            src="https://ik.imagekit.io/txh5evivcha5/Personal%20use/homemade-sushi-image_MdRVmIVDN.jpg?updatedAt=1697536473623"
                            alt="test-data"
                          />
                        </td>

                        <td className="px-[2.4rem] py-[1.6rem]">
                          rhfiha@gmail.com
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
      </div>
    </div>
  );
};

export default Writers;
