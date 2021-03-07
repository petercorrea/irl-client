import React from "react";
import styled from "styled-components";

let ContainerWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export default function Container({ children }) {
	return <ContainerWrapper>{children}</ContainerWrapper>;
}
