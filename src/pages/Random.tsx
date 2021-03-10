import firebase from "firebase/app";
import React, { useState } from "react";
import { GoTo } from "../components/GoTo";
import { RandomIdea } from "../components/RandomIdea";
import { SignOut } from "../components/SignOut";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

// * Force rerender
const useForceUpdate = () => {
	const [value, setValue] = useState(0);
	return () => setValue((value) => value + 1);
};

export const Random: React.FC<Props> = ({ auth, firestore, user }) => {
	const forceUpdate = useForceUpdate();

	return (
		<div>
			<div>
				<SignOut auth={auth} />
				<GoTo redirectTo="/" name="🏠 Home" />
			</div>
			<RandomIdea firestore={firestore} user={user} />
			<button onClick={forceUpdate}>🔃 New</button>
		</div>
	);
};
