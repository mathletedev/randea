import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// * Firebase config
import firebaseConfig from "./config/firebase-config.json";

import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import { PrivateRoute } from "./PrivateRoute";

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
		<BrowserRouter>
			<Switch>
				<PrivateRoute
					loggedIn={!!user}
					path="/"
					exact
					render={() =>
						user ? (
							<Home auth={auth} firestore={firestore} user={user} />
						) : (
							<div></div>
						)
					}
				/>
				<Route
					path="/login"
					exact
					render={() => (user ? <Redirect to="/" /> : <Landing auth={auth} />)}
				/>
				<Route path="/" render={() => <div>404 Page Not Found</div>} />
			</Switch>
		</BrowserRouter>
	);
};
