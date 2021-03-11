import React from "react";
import styled from "styled-components";

const Wrapper = styled.input`
	margin-bottom: 20px;
	width: 100%;
	max-width: 400px;
	height: ${(props) => props.theme.sizes.height.input};
	vertical-align: bottom;
	font-size: 1.5rem;
	font-weight: bold;
	padding: 20px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.black};
	background-color: ${(props) => props.theme.colors.white};
	border: 2px solid ${(props) => props.theme.colors.white};
	border-radius: ${(props) => props.theme.radii.button};

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.active};
	}

	&:focus ~ label,
	&:not(:placeholder-shown) ~ label {
		transform: translate(0px, -200%) scale(0.8);
	}

	&:focus ~ label {
		color: ${(props) => props.theme.colors.hotPink};
	}

	&:focus {
		outline: none;
		border: 2px solid ${(props) => props.theme.colors.hotPink};
	}
`;

export default function Input({
	id,
	name,
	placeholder,
	type,
	autoComplete,
	required,
}) {
	return (
		<Wrapper
			id={id}
			name={name}
			placeholder={placeholder}
			type={type}
			autoComplete={autoComplete}
			required
		/>
	);
}
