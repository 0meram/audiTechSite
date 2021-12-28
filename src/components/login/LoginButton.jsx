import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../home/Home";
const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<button
			className="btn btn-primary btn-block"
			onClick={() => loginWithRedirect(() => <Home />)}
		>
			Log In
		</button>
	);
};

export default LoginButton;
