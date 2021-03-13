import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
	& .option-hidden {
		display: none;
	}

	& > h1 {
		margin-bottom: 5px;
	}

	margin-bottom: 10px;
	position: relative;
	max-width: 300px;
`;

const DropDownWrapper = styled.div`
	& .option-hidden {
		display: none;
	}

	margin-bottom: 10px;
	position: relative;
	border-radius: ${(props) => props.theme.radii.button};

	background-color: ${(props) => props.theme.colors.white};
`;

const Selection = styled.li`
	cursor: pointer;
	height: ${(props) => props.theme.sizes.height.button};
	padding: 10px;
	border-radius: ${(props) => props.theme.radii.button};
	font-size: ${(props) => props.theme.fontSizes.input};
	height: fit-content;
	border: 2px solid transparent;

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.hotPink};
	}
`;

const OptionsContainer = styled.div`
	position: relative;
	border: 2px solid ${(props) => props.theme.colors.hotPink};
	border-radius: ${(props) => props.theme.radii.button};
	margin-top: 0px;
	background-color: ${(props) => props.theme.colors.white};
	width: 100%;
	z-index: 100;
`;

const Option = styled.li`
	padding: 10px;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: ${(props) => props.theme.radii.button};
	font-size: ${(props) => props.theme.fontSizes.input};

	&:hover {
		background-color: ${(props) => props.theme.colors.hotPink};
		color: ${(props) => props.theme.colors.white};
		cursor: pointer;
	}
`;

export default function DropDown({ title, values }) {
	const [currentSelection, setSelection] = useState(values[0]);
	const [toggleOptions, setToggleOptions] = useState(false);

	const style1 = {
		pointerEvents: "none",
		transform: "rotate(0deg)",
		transition: "transform .5s ease",
		position: "absolute",
		right: "10",
		top: "10",
	};

	const style2 = {
		pointerEvents: "none",
		transform: "rotate(180deg)",
		transition: "transform .5s ease",
		position: "absolute",
		right: "10",
		top: "10",
	};

	useEffect(() => {
		// close menu and rotate caret when clicked outside
		document.addEventListener("click", function (e) {
			if (
				!e.target.className.includes(`${title}-current-selection`) &&
				!e.target.className.includes(`${title}-dropdown`) &&
				!e.target.className.includes(`${title}-option`)
			) {
				setToggleOptions(false);
			}
		});
	}, []);

	const options = [];
	for (let value of values) {
		options.push(
			<Option
				key={value}
				onClick={() => handleSelection(value)}
				className={`${title}-option`}
			>
				{value}
			</Option>
		);
	}

	function toggleMenu() {
		setToggleOptions(!toggleOptions);
	}

	function handleSelection(value) {
		setSelection(value);
		setToggleOptions(!toggleOptions);
	}

	return (
		<Wrapper className={`${title}-dropdown`}>
			<h1>{title}</h1>

			<DropDownWrapper>
				<Selection
					key={currentSelection}
					onClick={(e) => toggleMenu(e)}
					className={`${title}-current-selection`}
				>
					{currentSelection}
				</Selection>
				<FontAwesomeIcon
					icon="caret-down"
					style={toggleOptions ? style2 : style1}
				/>
			</DropDownWrapper>

			<OptionsContainer className={toggleOptions ? "" : "option-hidden"}>
				{options}
			</OptionsContainer>
		</Wrapper>
	);
}
