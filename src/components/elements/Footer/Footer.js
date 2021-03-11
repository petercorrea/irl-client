import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	background-color: ${(props) => props.theme.colors.mint};

	& ul {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		li {
			color: ${(props) => props.theme.colors.white};
			margin-right: 20px;
			margin-left: 20px;
			cursor: pointer;
			font-weight: bold;
		}
	}
`;

export default function Footer() {
	return (
		<Wrapper className="footer">
			<ul>
				<li>About</li>
				<li>Contact</li>
				<li>Terms</li>
			</ul>
		</Wrapper>
	);
}
