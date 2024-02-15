// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import NewsContent from "../components/NewsContent";
const News = () => {
  const userInfo = {
    role: "admin",
  };
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-[2.4rem] font-medium">News</h2>
        {userInfo.role !== "admin" && (
          <Link
            className="px-3 py-[.6rem] bg-purple-600 text-white rounded-sm text-[1.6rem] hover:bg-purple-700"
            to="/dashboard/news/create">
            Create News
          </Link>
        )}
      </div>

      <NewsContent />
    </div>
  );
};

export default News;
