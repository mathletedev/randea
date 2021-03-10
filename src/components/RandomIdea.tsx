import firebase from "firebase/app";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Idea } from "./Idea";

// * Get auth and database
interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const RandomIdea: React.FC<Props> = ({ firestore, user }) => {
	// * Find the ideas collection where the author is the currently logged in user
	const ideasRef = firestore.collection("ideas");
	const query = ideasRef.where("author", "==", user.uid).limit(10);

	// * Update
	const [ideas] = useCollectionData(query, { idField: "id" });

	console.log(ideas);

	return (
		<div>
			{ideas && ideas.length ? (
				<Idea
					firestore={firestore}
					idea={ideas[Math.floor(Math.random() * ideas.length)]}
					showOptions={false}
				/>
			) : (
				"No results found"
			)}
		</div>
	);
};
