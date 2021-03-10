import firebase from "firebase/app";
import React from "react";
import { SignIn } from "../components/SignIn";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
}

export const Landing: React.FC<Props> = ({ auth }) => {
	return (
		<div>
			<h1>Randea</h1>
			<div>{<SignIn auth={auth} />}</div>
		</div>
	);
};
