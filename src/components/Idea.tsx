import firebase from "firebase/app";
import React from "react";
import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";

// * Gets the ID and idea document
interface Props {
	firestore: firebase.firestore.Firestore;
	idea: Data<firebase.firestore.DocumentData, "", "">;
	showOptions: boolean;
}

export const Idea: React.FC<Props> = ({ idea, firestore, showOptions }) => {
	return (
		<fieldset>
			<legend>{idea.title}</legend>
			<div>{idea.description}</div>
			{showOptions && (
				<div>
					<button
						onClick={() => firestore.collection("ideas").doc(idea.id).delete()}
					>
						🗑️
					</button>
					<button
						onClick={() =>
							firestore
								.collection("ideas")
								.doc(idea.id)
								.update({ public: !idea.public })
						}
					>
						{idea.public ? "📖" : "📘"}
					</button>
				</div>
			)}
		</fieldset>
	);
};
