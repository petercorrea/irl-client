import React from "react";
import styled from "styled-components";

let Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: fit-content;
`;

export default function FlexHC({ children }) {
	return <Wrapper>{children}</Wrapper>;
}
