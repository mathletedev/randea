import React from "react";
import firebase from "firebase/app";

import { GoTo } from "../components/GoTo";
import { SignOut } from "../components/SignOut";

// * Allows us to get the auth from firebase
interface Props {
	auth: firebase.auth.Auth;
}

export const Home: React.FC<Props> = ({ auth }) => {
	return (
		<div>
			<h1>Randea</h1>
			<div>{<SignOut auth={auth} />}</div>
			<div>
				<GoTo redirectTo="/ideas" name="💡 Ideas" />
			</div>
			<div>
				<GoTo redirectTo="/random" name="🎲 Random" />
			</div>
			<div>
				<GoTo redirectTo="/public" name="📖 Public" />
			</div>
		</div>
	);
};
