import React from "react";
import { Navigate } from "react-router-dom"

const PrivateRoute = ({component: Component}) => {
    const authData = localStorage.getItem("authData");
    if(!authData.access_token) {
        return <Navigate to="/" replace/>
    }
    return <Component/>
}

export default PrivateRoute;