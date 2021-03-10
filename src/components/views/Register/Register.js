import React from "react";
import styled from "styled-components";
import { color, space } from "styled-system";
import Button from "../../form/Button/Button";
import InputSwitcher from "../../form/InputSwitcher/InputSwitcher";
import FlexRow from "../../elements/FlexRow/FlexRow";
import { NavLink } from "react-router-dom";

let ButtonWrapper = styled(NavLink)`
	${color}
	${space}
	width: 100px;
	height: ${(props) => props.theme.sizes.height.button};
	max-width: 400px;
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-radius: ${(props) => props.theme.radii.button};
	border: none;
	cursor: pointer;
	text-align: center;
`;

let Container = styled.div`
	max-width: 400px;
	padding-left: 20px;
	padding-right: 20px;
`;

function NavButton({ text, onClickHandler, to }) {
	return (
		<ButtonWrapper
			to={to}
			onClick={onClickHandler}
			bg="primary"
			color="secondary"
			fontSize={{
				_: "m",
				l: "l",
			}}
		>
			{text}
		</ButtonWrapper>
	);
}

export default function Register() {
	return (
		<Container>
			<h1>Step 1</h1>
			<p style={{ "margin-bottom": "20px" }}>Basic Info</p>

			<InputSwitcher type="name" />
			<InputSwitcher type="birthday" />
			<InputSwitcher type="email" />
			<InputSwitcher type="password" />

			<FlexRow>
				<NavButton
					text="prev"
					color="primary"
					onClick={() => {}}
					to="/"
				></NavButton>
				<NavButton
					text="next"
					color="primary"
					onClick={() => {}}
					to="/register-step-2"
				></NavButton>
			</FlexRow>
		</Container>
	);
}
