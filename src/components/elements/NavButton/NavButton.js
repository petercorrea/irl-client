import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100px;
	height: 40px;
	padding: 10px;
	border-radius: ${(props) => props.theme.radii.button};
	background-color: ${(props) => props.theme.colors.hotPink};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& a {
		color: ${(props) => props.theme.colors.white};
	}
`;

export default function NavButton({ text, to }) {
	return (
		<Wrapper>
			<Link to={to}>{text}</Link>
		</Wrapper>
	);
}
