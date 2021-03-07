import React from "react";
import styled from "styled-components";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

let Wrapper = styled.div``;

export default function MultiCheckbox({ title, values }) {
	let result = [];

	for (let value of values) {
		result.push(<CheckboxInput key={value} value={value} />);
	}

	return (
		<Wrapper>
			<h2>{title}</h2>
			{result}
		</Wrapper>
	);
}
