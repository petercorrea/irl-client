import React from "react";
import styled from "styled-components";

let Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	height: 100%;
	width: 100%;
`;

export default function FlexColumn({ children }) {
	return <Wrapper className="peter">{children}</Wrapper>;
}
