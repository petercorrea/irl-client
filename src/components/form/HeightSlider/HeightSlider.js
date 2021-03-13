import React, { useState } from "react";
import styled from "styled-components";
import STORE from "../../../store";

const Wrapper = styled.div`
	width: 100%;

	& > p {
		margin: 0;
		margin-bottom: 10px;
		color: ${(props) => props.theme.colors.hotPink};
	}

	margin-top: 10px;
	margin-bottom: 10px;
`;

const Slider = styled.input`
	-webkit-appearance: none;
	height: 5px;
	width: 100%;
	max-width: 300px;
	border-radius: 5px;
	background: ${(props) => props.theme.colors.white};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 20px;
		height: 20px;
		background: ${(props) => props.theme.colors.hotPink};
		cursor: pointer;
		border-radius: 50%;
	}

	&::-moz-slider-thumb {
		appearance: none;
		width: 25px;
		height: 25px;
		background: red;
		cursor: pointer;
		outline: 5px solid black;
	}
`;

export default function HeightSlider() {
	const [slider, setSlider] = useState(0);

	function handleSlider(e) {
		setSlider(e.target.value);
	}

	return (
		<Wrapper>
			<h1>height</h1>
			<p>{STORE.STORE.height[slider]}</p>
			<Slider
				type="range"
				min="0"
				max="36"
				value={slider}
				onChange={(e) => handleSlider(e)}
			></Slider>
		</Wrapper>
	);
}
