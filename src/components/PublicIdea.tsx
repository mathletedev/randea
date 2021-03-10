import firebase from "firebase/app";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Idea } from "./Idea";

// * Get auth and database
interface Props {
	firestore: firebase.firestore.Firestore;
}

export const PublicIdea: React.FC<Props> = ({ firestore }) => {
	// * Find all public ideas
	const ideasRef = firestore.collection("ideas");
	const query = ideasRef.where("public", "==", true).limit(10);

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
