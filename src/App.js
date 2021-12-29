import "./App.css";
import Nav from "./components/nav/Nav.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import Wrapper from "./components/login/Loading.jsx";

function App() {
	return (
		<div className="App">
			<Auth0Provider
				domain="dev-xbt-za47.us.auth0.com"
				clientId="PmDRuPiDa1W8PwEPD9vvPcYj607ms9bD"
				redirectUri={window.location.origin}
			>
				<Nav />
				<Wrapper />
			</Auth0Provider>
		</div>
	);
}

export default App;
