import React from "react";
import firebase from "firebase/app";
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";

// * Gets the ID and idea document
interface Props {
	idea: Data<firebase.firestore.DocumentData, "", "">;
}

export const Idea: React.FC<Props> = ({ idea }) => {
	return (
		<fieldset>
			<legend>{idea.title}</legend>
			<div>{idea.description}</div>
		</fieldset>
	);
};
