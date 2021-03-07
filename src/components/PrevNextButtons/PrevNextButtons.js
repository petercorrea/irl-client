import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { OnBoardingContext } from "../../contexts/OnBoarding";

let PrevNextButtonsContainer = styled.div`
	width: 80vw;
	max-width: 400px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	bottom: 40px;
`;

export default function PrevNextButtons() {
	let context = useContext(OnBoardingContext);

	return (
		<PrevNextButtonsContainer>
			<Button text="Prev" onClickHandler={context.moveLeft} />
			<Button text="Next" onClickHandler={context.moveRight} />
		</PrevNextButtonsContainer>
	);
}
