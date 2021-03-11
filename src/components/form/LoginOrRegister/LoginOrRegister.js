import React from "react";
import styled from "styled-components";
import InputSwitcher from "../../form/InputSwitcher/InputSwitcher";
import Button from "../../form/Button/Button";
import { Link } from "react-router-dom";
import { position, layout, space } from "styled-system";
import LoginSVG from "../../../assets/login.svg";

const H1 = styled.h1`
	font-size: ${(props) => props.theme.fontSizes.h1};
	color: ${(props) => props.theme.colors.black};
`;

const P = styled.p`
	margin-bottom: 80px;
	font-size: 0.8rem;
	color: ${(props) => props.theme.colors.black};
`;

const RegisterLink = styled(Link)`
	color: ${(props) => props.theme.colors.hotPink};
	width: 100%;
	text-align: center;
	font-weight: bold;
`;

const Forgot = styled(Link)`
	color: ${(props) => props.theme.colors.hotPink};
	width: 100%;
	text-align: right;
	font-size: 0.8rem;
	font-weight: bold;
`;

const Wrapper = styled.div`
	${position}
	${space}
	padding: ${(props) => props.theme.space.padding.container};
	max-width: 400px;
`;

export default function LoginOrRegister() {
	return (
		<Wrapper>
			<H1>Welcome</H1>
			<P>Sign in to continue</P>
			<InputSwitcher type="email" />
			<InputSwitcher type="password" />
			<Forgot to="/">Forgot Password?</Forgot>
			<Button text="Sign In" />
			<RegisterLink to="/register-step-1">Register</RegisterLink>
		</Wrapper>
	);
}
