import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

// * User login state
interface Props extends RouteProps {
	loggedIn: boolean;
}

// * Allows us to see if a user is logged in before going to a route
export const PrivateRoute: React.FC<Props> = ({ loggedIn, ...props }) => {
	return loggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};
