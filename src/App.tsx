import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// * Firebase config
import firebaseConfig from "./config/firebase-config.json";

import { Home } from "./Home";
import { Landing } from "./Landing";

// * Initialize the firebase app with the credentials on website
// ! If possible change authDomain
firebase.initializeApp(firebaseConfig);

// * Create a new auth and firestore with firebase
const auth = firebase.auth();
const firestore = firebase.firestore();

export default () => {
	// * Gets the currently logged in user
	const [user] = useAuthState(auth);

	// * Show home page if logged in, else show sign in page
	return (
		<div>
			{user ? (
				<Home auth={auth} firestore={firestore} user={user} />
			) : (
				<Landing auth={auth} />
			)}
		</div>
	);
};
