import React from "react";
import styled from "styled-components";

let Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	min-width: 100%;
	flex-wrap: nowrap;
	flex: 1 1 auto;
	height: 100%;
`;

export default function FlexRow({ children }) {
	return <Wrapper className="flex-row">{children}</Wrapper>;
}
