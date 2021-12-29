import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../home/Home";
import ClipLoader from "react-spinners/ClipLoader";
import Welcome from "../home/Welcome";

function Wrapper() {
	const { isLoading, error, isAuthenticated } = useAuth0();
	if (isLoading) {
		return <ClipLoader color="white" loading={true} size={360} />;
	}
	if (error) {
		return <div>Oops... {error.message}</div>;
	}
	if (isAuthenticated) {
		return <Home />;
	}
	return <Welcome />;
}
export default Wrapper;
