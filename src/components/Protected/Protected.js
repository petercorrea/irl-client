import React from "react";
import styled from "styled-components";

const ProtectedContainer = styled.div`
	width: 50px;
	height: 50px;
	color: black;
	background-color: white;
	border: 0px black solid;
	margin: 0px;
`;

export default function Protected() {
	return (
		<ProtectedContainer>
			<h1>Log out</h1>
		</ProtectedContainer>
	);
}
