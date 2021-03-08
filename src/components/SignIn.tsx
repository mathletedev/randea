import React from "react";
import firebase from "firebase/app";

interface Props {
	auth: firebase.auth.Auth;
}

export const SignIn: React.FC<Props> = ({ auth }) => {
	// * Signs in with the auth provided
	const signIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return <button onClick={signIn}>Sign in with Google</button>;
};
