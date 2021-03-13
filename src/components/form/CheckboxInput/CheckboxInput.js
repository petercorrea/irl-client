import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	width: ${(props) => props.theme.sizes.width.input};
	margin-bottom: 10px;
	border-radius: ${(props) => props.theme.radii.button};

	& label {
		cursor: pointer;
		color: ${(props) => props.theme.colors.black};
		font-size: ${(props) => props.theme.fontSizes.input};
	}

	&:hover label {
	}
	&:hover input {
		border: 2px solid ${(props) => props.theme.colors.hotPink};
		cursor: pointer;
	}
`;

const CheckboxWrapper = styled.input`
	-webkit-appearance: none;
	-moz-appearance: none;
	border: 2px solid ${(props) => props.theme.colors.hotPink};
	width: 30px;
	height: 30px;
	border-radius: ${(props) => props.theme.radii.button};
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
			width: 8px;
			height: 15px;
			border: 2px solid ${(props) => props.theme.colors.white};
			border-top: 0;
			border-left: 0;
			left: 7px;
			top: 4px;
			transform: rotate(45deg);
		}
	}
	&:checked {
		background-color: ${(props) => props.theme.colors.hotPink};
		border: 2px solid ${(props) => props.theme.colors.hotPink};
	}

	&:checked ~ label {
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
