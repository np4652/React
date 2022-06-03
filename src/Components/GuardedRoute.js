import React from 'react';
import { Route, Redirect, Navigate, Routes } from "react-router-dom";

const GuardedRoute = ({
  user,
  redirectPath = '/login',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default GuardedRoute;