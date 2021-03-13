import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
`;

const Input = styled.input`
	height: ${(props) => props.theme.sizes.height.input};
	width: 100%;
	max-width: ${(props) => props.theme.sizes.width.input};

	border: none;
	padding: ${(props) => props.theme.space.padding.input};
	border-radius: ${(props) => props.theme.radii.button};
	background-color: ${(props) => props.theme.colors.white};
	font-size: ${(props) => props.theme.fontSizes.input};

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.hotPink};
		cursor: pointer;
	}

	&::placeholder {
		color: ${(props) => props.theme.colors.inactive};
		font-size: ${(props) => props.theme.fontSizes.input};
	}
`;

export default function TextInput({ placeholder, type }) {
	return (
		<Wrapper>
			<label htmlFor={type}>Gender</label>
			<Input id={type} placeholder={placeholder} />
		</Wrapper>
	);
}
