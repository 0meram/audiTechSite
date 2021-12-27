import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";
import Login from "./components/login/Login.jsx";
import Home from "./components/home/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
