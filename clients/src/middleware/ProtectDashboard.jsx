// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const ProtectDashboard = () => {
  const userInfo = {
    name: "farid",
    role: "admin",
  };

  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectDashboard;
