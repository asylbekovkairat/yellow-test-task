import React from "react";
import { Navigate } from 'react-router-dom';
const PublicRoute = ({component: Component, auth }) => {
  if (!auth?.access_token) {
    return Component
  }
  return <Navigate to="/jogs" />
};

export default PublicRoute