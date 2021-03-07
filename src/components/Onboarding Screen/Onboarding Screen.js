import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

let OnBoardingContainer = styled.div`
	width: 33.33%;
	height: 100%;
	background-color: white;

	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;

	& > div {
		width: 300px;
		position: relative;
		bottom: 0px;
	}

	& > img {
		width: 200px;
		min-height: 200px;
		margin-bottom: 50px;
		position: relative;
	}

	& > div > h1,
	p {
		text-align: center;
	}

	& > div > h1 {
		margin-bottom: 20px;
	}

	& > div > p {
		line-height: 1.5rem;
	}

	& > Button {
		position: absolute;
		bottom: 120px;
	}
`;

export default function OnBoardingScreen({
	image,
	heading,
	description,
	signupButton,
}) {
	return (
		<>
			<OnBoardingContainer>
				<img src={image} alt="find love" />
				<div>
					<h1>{heading}</h1>
					<p>{description}</p>
				</div>
				{signupButton ? <Button text="Sign Up"></Button> : ""}
			</OnBoardingContainer>
		</>
	);
}
