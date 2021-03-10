import React, { useState } from "react";
import firebase from "firebase/app";

import { GoTo } from "../components/GoTo";
import { SignOut } from "../components/SignOut";
import { PublicIdea } from "../components/PublicIdea";

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

export const Public: React.FC<Props> = ({ auth, firestore, user }) => {
	const forceUpdate = useForceUpdate();

	return (
		<div>
			<div>
				<SignOut auth={auth} />
				<GoTo redirectTo="/" name="🏠 Home" />
			</div>
			<PublicIdea firestore={firestore} />
			<button onClick={forceUpdate}>🔃 New</button>
		</div>
	);
};
