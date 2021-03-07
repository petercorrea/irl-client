import React from "react";
import styled from "styled-components";

let InputWrapper = styled.input`
	width: 250px;
	/* height: 40px; */

	border: 1px solid var(--inactive);
	border-radius: var(--border-radius);
	vertical-align: bottom;
	font-size: 1.5rem;
	margin-top: 20px;
	margin-bottom: 20px;
	padding: 10px;
	cursor: pointer;

	&:hover {
		border: 1px solid var(--active);
	}

	&:focus ~ label,
	&:not(:placeholder-shown) ~ label {
		transform: translate(0px, -25px) scale(0.8);
	}

	&:focus ~ label {
		color: var(--active);
	}

	&:focus {
		outline: none;
		border: 1px solid var(--active);
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
		<InputWrapper
			id={id}
			name={name}
			placeholder={placeholder}
			type={type}
			autoComplete={autoComplete}
			required
		/>
	);
}
