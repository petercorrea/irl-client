import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: block;
`;

export default function CenterContainer({ children }) {
	return <Wrapper>{children}</Wrapper>;
}
