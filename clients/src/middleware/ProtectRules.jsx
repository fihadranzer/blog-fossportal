// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectRules = ({ role }) => {
  const userInfo = {
    name: "farid",
    role: "writer",
  };

  if (userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard/unable-access" />;
  }
};

export default ProtectRules;
