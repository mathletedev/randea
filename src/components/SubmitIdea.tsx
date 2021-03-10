import firebase from "firebase/app";
import React, { useState } from "react";

// * Allows us to get the auth from firebase
interface Props {
	firestore: firebase.firestore.Firestore;
	user: firebase.User;
}

export const SubmitIdea: React.FC<Props> = ({ firestore, user }) => {
	// * States for form management
	const [formValue, setFormValue] = useState({
		title: "",
		description: ""
	});

	const addIdea = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// * Adds idea to database
		await firestore.collection("ideas").add({
			author: user.uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			title: formValue.title,
			description: formValue.description,
			public: false
		});

		// * Reset form
		setFormValue({
			title: "",
			description: ""
		});
	};

	// ! React.FormEvent<HTMLInputElement> is not working
	// ! Find way to not use any
	const changeForm = (e: any) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form onSubmit={addIdea}>
			<input
				value={formValue.title}
				name="title"
				onChange={changeForm}
				placeholder="Title"
			/>
			<input
				value={formValue.description}
				name="description"
				onChange={changeForm}
				placeholder="Description"
			/>

			<button
				type="submit"
				disabled={!formValue.title || !formValue.description}
			>
				📝
			</button>
		</form>
	);
};
