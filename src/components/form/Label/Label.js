import React from "react";
import styled from "styled-components";

let LabelWrapper = styled.label`
	width: fit-content;
	height: 20px;
	color: ${(props) => props.theme.colors.hotPink};
	transition: 0.4s ease;
	font-size: ${(props) => props.theme.fontSizes.l};
	font-weight: bold;
	padding-left: 4px;
	padding-right: 4px;
	transform-origin: left top;
	position: relative;
	top: -60px;
	left: 10px;
	pointer-events: none;
	z-index: 100;
`;

export default function Label({ children }) {
	return <LabelWrapper>{children}</LabelWrapper>;
}
