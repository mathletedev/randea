import React from "react";
import { useHistory } from "react-router";

// * Path to redirect to
interface Props {
	redirectTo: string;
	name: string;
}

export const GoTo: React.FC<Props> = ({ redirectTo, name }) => {
	// * Allows us to push to history
	const history = useHistory();

	return <button onClick={() => history.push(redirectTo)}>{name}</button>;
};
