import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	min-height: 100%;
`;

export default function FlexColumn({ children }) {
	return <Wrapper className="flex-column">{children}</Wrapper>;
}
