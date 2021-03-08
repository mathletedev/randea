import React from "react";
import firebase from "firebase/app";

import { SignIn } from "./SignIn";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
}

export const Landing: React.FC<Props> = ({ auth }) => {
	return <div>{<SignIn auth={auth} />}</div>;
};
