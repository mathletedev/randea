import React from "react";
import firebase from "firebase/app";

import { SignOut } from "./SignOut";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
}

export const Home: React.FC<Props> = ({ auth }) => {
	return <div>{<SignOut auth={auth} />}</div>;
};
