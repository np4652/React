import React from 'react';
import { Route, Redirect ,Navigate,Routes } from "react-router-dom";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Routes>
        <Route {...rest} render={(props) => (
            auth === true
            ? <Component {...props} />
            : <Navigate  to='/login' />
        )} />
    </Routes>
)

export default GuardedRoute;