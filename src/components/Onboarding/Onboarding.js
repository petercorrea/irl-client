import React, { useContext, useState } from "react";
import styled from "styled-components";
import OnBoardingScreen from "../Onboarding Screen/Onboarding Screen";
import PrevNextButtons from "../PrevNextButtons/PrevNextButtons";
import { OnBoardingContext } from "../../contexts/OnBoarding";
import image1 from "../../assets/onboarding-1.svg";
import image2 from "../../assets/onboarding-2.svg";
import image3 from "../../assets/onboarding-3.svg";

let OnBoardingContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 300vw;
	height: 100vh;
	background-color: red;
	position: absolute;
	/* used to slide between the onboarding screens */
	left: -${(props) => props.position}%;
	overflow-x: scroll;

	transition: left 0.5s ease;
`;
export default function OnBoarding() {
	let [position, setPosition] = useState(0);

	function moveRight() {
		if (position !== 200) setPosition((position += 100));
	}

	function moveLeft() {
		if (position !== 0) setPosition((position -= 100));
	}

	let context = {
		position,
		moveRight,
		moveLeft,
	};

	let onboardingData = {
		screen1: {
			image: image1,
			heading: "Inclusivity",
			description:
				"Join a diverse community where your inclusion and safety is our responsibility",
		},

		screen2: {
			image: image2,
			heading: "Explore",
			description:
				"Come meet the most incredible and diverse individuals accross the globe",
		},

		screen3: {
			image: image3,
			heading: "Ready?",
			description:
				"Everyone is hesitant to find love, let us make that experiance smoother",
		},
	};

	return (
		<OnBoardingContext.Provider value={context}>
			<OnBoardingContainer position={position}>
				<OnBoardingScreen
					image={onboardingData.screen1.image}
					heading={onboardingData.screen1.heading}
					description={onboardingData.screen1.description}
				></OnBoardingScreen>
				<OnBoardingScreen
					image={onboardingData.screen2.image}
					heading={onboardingData.screen2.heading}
					description={onboardingData.screen2.description}
				></OnBoardingScreen>
				<OnBoardingScreen
					image={onboardingData.screen3.image}
					heading={onboardingData.screen3.heading}
					description={onboardingData.screen3.description}
					signupButton="true"
				></OnBoardingScreen>
			</OnBoardingContainer>
			<PrevNextButtons />
		</OnBoardingContext.Provider>
	);
}
