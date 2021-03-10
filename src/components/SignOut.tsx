import firebase from "firebase/app";
import React from "react";

interface Props {
	auth: firebase.auth.Auth;
}

export const SignOut: React.FC<Props> = ({ auth }) => {
	// * If there is a user currently logged in, sign them out with the provided auth
	return (
		auth.currentUser && <button onClick={() => auth.signOut()}>Sign out</button>
	);
};
