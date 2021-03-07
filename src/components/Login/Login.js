import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import EmailInput from "../EmailInput/EmailInput";
import NameInput from "../NameInput/NameInput";
import BirthdayInput from "../BirthdayInput/BirthdayInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import MultiCheckbox from "../MultiCheckbox/MultiCheckbox";
import DropDown from "../DropDown/DropDown";
import MainInput from "../MainInput/MainInput";
import Button from "../Button/Button";
import FlexHC from "../FlexHC/FlexHC";
import { Link } from "react-router-dom";

let SignupContainer = styled.div`
	width: 100%;
	height: 100%;
	color: black;
	background-color: white;
	border: 0px black solid;
	margin: 0px;
	margin-top: 20px;

	& > h1 {
		margin-bottom: 20px;
	}
`;

export default function Signup() {
	return (
		<Container>
			<SignupContainer>
				<h1>Welcome</h1>
				<MainInput type="email" />
				<MainInput type="password" />

				<Button text="Sign In" />
				<FlexHC>
					<Link>Register</Link>
				</FlexHC>
			</SignupContainer>
		</Container>
	);
}
