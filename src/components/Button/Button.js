import React from "react";
import styled from "styled-components";

let ButtonContainer = styled.button`
	color: var(--white);
	width: 100px;
	height: 50px;
	background-color: var(--primary);
	border: none;
	border-radius: var(--border-radius);
	cursor: pointer;
	font-size: var(--button-text);
`;

export default function Button({ text, onClickHandler }) {
	return <ButtonContainer onClick={onClickHandler}>{text}</ButtonContainer>;
}
