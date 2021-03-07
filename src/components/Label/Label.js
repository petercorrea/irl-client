import React from "react";
import styled from "styled-components";

let LabelWrapper = styled.label`
	width: fit-content;
	height: 20px;
	color: var(--inactive);
	transition: 0.4s ease;
	font-size: 1.2rem;
	background-color: var(--white);
	padding-left: 4px;
	padding-right: 4px;

	/* transform: translate(0px, -100px) scale(1.1); */
	transform-origin: left top;
	position: relative;
	top: -32px;
	left: 10px;
	pointer-events: none;
	z-index: 100;
`;

export default function Label({ children }) {
	return <LabelWrapper>{children}</LabelWrapper>;
}
