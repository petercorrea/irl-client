// Libs
import React, { useContext } from "react";
import styled from "styled-components";

// Styles
import "../../../styles/reset.css";
import "../../../styles/variables.css";
import "../../../styles/util-classes.css";
import theme from "../../../styles/theme";

// Contexts
import { AuthContext } from "../../../contexts/auth";

// Views
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register1 from "../Register/Register";
import Register2 from "../Register2/Register2";

// Components
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { color } from "styled-system";

library.add(faCaretDown);

const Application = styled.div`
	width: 100vw;
	height: 100%;
	overflow-x: hidden;
	background-color: ${(props) => props.theme.colors.sand};
`;

const App = () => {
	let auth = useContext(AuthContext);

	return (
		<ThemeProvider theme={theme}>
			<Application className="App">
				<Router>
					<Switch>
						<Route
							path="/"
							exact
							render={() => {
								if (!auth.loggedIn) {
									return <Login />;
								} else {
									return <Home />;
								}
							}}
						/>

						<Route path="/register-step-1" exact component={Register1} />
						<Route path="/register-step-2" exact component={Register2} />
					</Switch>
				</Router>
			</Application>
		</ThemeProvider>
	);
};

export default App;
