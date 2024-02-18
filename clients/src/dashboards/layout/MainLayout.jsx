// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-100">
      <Sidebar />
      <div className="ml-[25rem] w-[calc(100vw-26.8rem)]  min-h-[100vh]">
        <Header />
        <div className="p-4">
          <div className="pt-[8.5rem]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
