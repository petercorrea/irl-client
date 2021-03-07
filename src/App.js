import React, { useContext } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import "./styles/Global.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Guest from "./components/Guest/Guest";
import Signup from "./components/Signup/Signup";
import Protected from "./components/Protected/Protected";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import OnBoarding from "./components/Onboarding/Onboarding";
import { AuthContext } from "./contexts/auth";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretDown);

const Application = styled.div`
	width: 100vw;
	min-height: 100vh;
	overflow-x: hidden;
	display: flex;
	flex-direction: column;
	justify-items: flex-start;
	align-items: center;
	background-color: white;
	position: relative;
`;

const App = () => {
	let auth = useContext(AuthContext);

	return (
		<Application>
			<Router>
				{/* <NavBar /> */}

				<Switch>
					<Route
						path="/"
						exact
						render={() => {
							if (!auth.loggedIn) {
								return <Signup />;
							} else if (auth.loggedIn) {
								return <Home />;
							}
						}}
					/>
				</Switch>
			</Router>
		</Application>
	);
};

export default App;
