import React from "react";
import styled from "styled-components";

let MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	width: fit-content;

	& label {
		cursor: pointer;
		color: var(--inactive);
	}

	&:hover label {
		color: var(--active);
	}
	&:hover input {
		border: 1px solid var(--active);
		cursor: pointer;
	}
`;

let CheckboxWrapper = styled.input`
	-webkit-appearance: none;
	-moz-appearance: none;
	border: 1px solid var(--inactive);
	width: 20px;
	height: 20px;
	border-radius: 6px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-right: 10px;

	&:checked {
		&:after {
			content: "";
			display: block;
			position: absolute;
			opacity: 1;
			width: 5px;
			height: 9px;
			border: 2px solid white;
			border-top: 0;
			border-left: 0;
			left: 7px;
			top: 4px;
			transform: rotate(45deg);
		}
	}
	&:checked {
		background-color: var(--active);
		border: 1px solid var(--active);
	}

	&:checked ~ label {
		color: var(--active);
	}

	&:disabled {
		cursor: not-allowed;
	}
`;

export default function CheckboxInput({ value }) {
	return (
		<MainContainer>
			<CheckboxWrapper
				type="checkbox"
				name={value}
				id={value}
			></CheckboxWrapper>
			<label htmlFor={value}>{value}</label>
		</MainContainer>
	);
}
