import "./App.css";
import LoginPage from "./components/login/SignupButton";
import Nav from "./components/nav/Nav.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home";
import SignIn from "./components/login/LoginButton";
import ProtectedRoute from "./components/login/ProtectedRoute.jsx";


import LoginButton from "./components/login/LoginButton.jsx";
import LogoutButton from "./components/login/LogoutButton";
import Auth0ProviderWithHistory from "./components/login/auth";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useHistory,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isAuthenticated } = useAuth0();
	const tab = isAuthenticated ? <Home /> : <Login />;

	return (
		<div className="App">
			<Router>
				<Auth0ProviderWithHistory>
					<Nav />
					<Switch>
						<Route exact path="/">
							<h1>Login page</h1>
						<ProtectedRoute path="/home">
							<Home />
						</ProtectedRoute>
						</Route>
					</Switch>
				</Auth0ProviderWithHistory>
			</Router>
		</div>
	);
}

export default App;
