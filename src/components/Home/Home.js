import React from "react";
import styled from "styled-components";

const LogoutContainer = styled.div`
	width: 50px;
	height: 50px;
	color: black;
	background-color: white;
	border: 0px black solid;
	margin: 0px;
`;

export default function Home() {
	return (
		<LogoutContainer>
			<h1>Welcome</h1>
		</LogoutContainer>
	);
}
