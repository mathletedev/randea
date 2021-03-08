import React from "react";
import firebase from "firebase/app";
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";

// * Gets the ID and idea document
interface Props {
	key: any;
	idea: Data<firebase.firestore.DocumentData, "", "">;
}

export const Idea: React.FC<Props> = ({ key, idea }) => {
	return (
		<div>
			<h3>{idea.title}</h3>
			<p>{idea.description}</p>
		</div>
	);
};
