import React from "react";
import { Navigate } from 'react-router-dom';
const PublicRoute = ({component: Component }) => {
  const authData = localStorage.getItem("authData");
  if (authData) {
    return <Navigate to="/jogs" replace/>;
  }
  return <Component/>
};

export default PublicRoute