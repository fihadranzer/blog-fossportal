// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";
import JodithEditor from "jodit-react";
import Gallery from "../components/Gallery";
const CreateNews = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-[2.4rem] font-medium">Add News</h2>

        <Link
          className="px-3 py-[.6rem] bg-purple-600 text-white rounded-sm text-[1.6rem] hover:bg-purple-700"
          to="/dashboard/news">
          News
        </Link>
      </div>

      <div className="p-4">
        <form>
          <div className="flex flex-col gap-y-2 mb-6">
            <label
              className="text-[1.6rem] font-medium text-gray-600"
              htmlFor="title">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              className="px-3 text-[1.6rem] py-[1.6rem] border rounded-md outline-0 border-gray-300 focus:border-green-500 h-10"
            />
          </div>

          <div className="mb-6">
            <div>
              <label
                htmlFor="img"
                className={` w-full h-[18rem] rounded text-[#404040] gap-2 flex justify-center items-center cursor-pointer border-2 border-dashed`}>
                <div className="flex justify-center items-center flex-col gap-y-2">
                  <span>
                    <MdCloudUpload className="text-[2.4rem]" />
                  </span>
                  <span className="text-[1.6rem]">Select Image</span>
                </div>
              </label>
              <input className="hidden" type="file" name="img" id="img" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2 mb-6">
              <div className="flex justify-start items-center gap-x-2">
                <h2 className="text-[1.6rem] font-medium text-gray-600">
                  Description
                </h2>

                <div onClick={() => setShow(true)}>
                  <span className="text-[2.4rem] cursor-pointer">
                    <MdCloudUpload />
                  </span>
                </div>
              </div>

              <div className="text-[1.6rem]">
                <JodithEditor />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button className="px-3 py-[.6rem] bg-purple-600 text-white rounded-sm text-[1.6rem] hover:bg-purple-700">
              Add News
            </button>
          </div>
        </form>
      </div>
      {show && <Gallery setShow={setShow} images={[]} />}
    </div>
  );
};

export default CreateNews;
