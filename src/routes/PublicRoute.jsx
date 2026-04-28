import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const isAuth = false; //replace with actual auth state
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};
