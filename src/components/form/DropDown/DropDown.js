import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
	& .option-hidden {
		display: none;
	}

	margin-bottom: 10px;
	position: relative;
`;

const Selection = styled.li`
	cursor: pointer;
	border: 1px solid var(--inactive);
	height: var(--form-input-height);
	padding: 10px;
	border-radius: var(--border-radius);
	height: fit-content;

	&:hover {
		border: 1px solid var(--active);
	}
`;

const OptionsContainer = styled.div`
	border: 1px solid var(--inactive);
	border-radius: var(--border-radius);
	margin-top: 10px;
`;

const Option = styled.li`
	padding: 10px;
	&:hover {
		background-color: var(--active);
		color: var(--white);
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
			<h2>{title}</h2>

			<Wrapper>
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
			</Wrapper>

			<OptionsContainer className={toggleOptions ? "" : "option-hidden"}>
				{options}
			</OptionsContainer>
		</Wrapper>
	);
}
