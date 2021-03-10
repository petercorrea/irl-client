import React from "react";
import styled from "styled-components";
import { color, space, layout, typography } from "styled-system";

let Wrapper = styled.button`
	${color}
	${space}
	${typography}
	${layout}
	width: 100%;
	height: ${(props) => props.theme.sizes.height.button};
	max-width: 400px;
	margin-top: 10px;
	margin-bottom: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	border-radius: ${(props) => props.theme.radii.button};
	border: none;
	cursor: pointer;
	font-weight: bold;
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.hotPink};
`;

export default function Button({ text, onClickHandler }) {
	return (
		<Wrapper
			onClick={onClickHandler}
			bg="primary"
			fontSize={{
				_: "m",
				l: "l",
			}}
		>
			{text}
		</Wrapper>
	);
}
