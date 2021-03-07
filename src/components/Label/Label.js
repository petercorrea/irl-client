import React from "react";
import styled from "styled-components";

let LabelWrapper = styled.label`
	width: fit-content;
	height: 20px;
	color: var(--inactive);
	transition: 0.4s ease;
	font-size: 1.2rem;
	background-color: var(--white);

	/* transform: translate(0px, -100px) scale(1.1); */
	transform-origin: left top;
	position: relative;
	top: -55px;
	left: 10px;
	pointer-events: none;
`;

export default function Label({ children }) {
	return <LabelWrapper>{children}</LabelWrapper>;
}
