import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

// * Components
import { Home } from "./Home";
import { SignIn } from "./SignIn";

// * Initialize the firebase app with the credentials on website
// ! If possible change authDomain
firebase.initializeApp({
	apiKey: "AIzaSyADdXxTR3xHJdc07AlqUQoT7mwlnx6DZpM",
	authDomain: "mathletedev-randea.firebaseapp.com",
	projectId: "mathletedev-randea",
	storageBucket: "mathletedev-randea.appspot.com",
	messagingSenderId: "384099579614",
	appId: "1:384099579614:web:de14ae1ee31fd23a2cb44f",
	measurementId: "G-2DEKFCPSDV"
});

// * Create a new auth with firebase
const auth = firebase.auth();

export default () => {
	// * Gets the currently logged in user
	const [user] = useAuthState(auth);

	// * Show home page if logged in, else show sign in page
	return <div>{user ? <Home auth={auth} /> : <SignIn auth={auth} />}</div>;
};
