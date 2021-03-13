import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const OptionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
`;

const OptionItem = styled.button`
	padding: 10px;
	background-color: ${(props) =>
		props.active ? props.theme.colors.hotPink : props.theme.colors.white};

	border: 2px solid
		${(props) =>
			props.active ? props.theme.colors.hotPink : props.theme.colors.white};
	color: ${(props) =>
		props.active ? props.theme.colors.white : props.theme.colors.hotPink};
	margin: 5px;
	border-radius: ${(props) => props.theme.radii.button};

	&:hover {
		border: 2px solid ${(props) => props.theme.colors.hotPink};
	}
`;

function Option({ value }) {
	const [active, setActive] = useState(false);

	function handleOption(e) {
		setActive(!active);
		console.log(value);
	}

	return (
		<OptionItem
			key={value}
			value={value}
			active={active}
			onClick={(e) => handleOption(e)}
		>
			{value}
		</OptionItem>
	);
}

export default function MultiChoice({ values, title }) {
	const options = [];
	for (let value of values) {
		options.push(<Option value={value} key={value} />);
	}

	return (
		<Wrapper>
			<h1>{title}</h1>
			<OptionWrapper>{options}</OptionWrapper>
		</Wrapper>
	);
}
