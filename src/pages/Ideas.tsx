import React from "react";
import firebase from "firebase/app";

import { GoTo } from "../components/GoTo";
import { SignOut } from "../components/SignOut";
import { IdeaList } from "../components/IdeaList";
import { SubmitIdea } from "../components/SubmitIdea";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const Ideas: React.FC<Props> = ({ auth, firestore, user }) => {
	return (
		<div>
			<div>
				{<SignOut auth={auth} />}
				{<GoTo redirectTo="/" name="🏠 Home" />}
			</div>
			<div>{<IdeaList firestore={firestore} user={user} />}</div>
			<div>{<SubmitIdea firestore={firestore} user={user} />}</div>
		</div>
	);
};
