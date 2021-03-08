import React from "react";
import firebase from "firebase/app";

import { SignOut } from "./SignOut";
import { Ideas } from "./Ideas";
import { SubmitIdea } from "./SubmitIdea";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const Home: React.FC<Props> = ({ auth, firestore, user }) => {
	return (
		<div>
			<div>{<SignOut auth={auth} />}</div>
			<div>{<Ideas firestore={firestore} user={user} />}</div>
			<div>{<SubmitIdea auth={auth} firestore={firestore} user={user} />}</div>
		</div>
	);
};
