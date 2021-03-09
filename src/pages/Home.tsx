import React from "react";
import firebase from "firebase/app";
import { useHistory } from "react-router";

import { SignOut } from "../components/SignOut";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
}

export const Home: React.FC<Props> = ({ auth }) => {
	// * Allows us to push to history
	const history = useHistory();

	return (
		<div>
			<div>{<SignOut auth={auth} />}</div>
			<button onClick={() => history.push("/ideas")}>💡</button>
		</div>
	);
};
