import React from "react";
import { Navigate } from "react-router-dom"

const PrivateRoute = ({component: Component, auth}) => {
    if(auth?.access_token) {
        return Component
    }
    return <Navigate to="/"/>
}

export default PrivateRoute;
