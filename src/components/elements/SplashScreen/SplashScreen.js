import React from "react";
import styled from "styled-components";
import SplashImg from "../../../assets/SplashScreen.jpg";
import { flexbox } from "styled-system";

let Wrapper = styled.div`
	${flexbox}

	& img {
		position: relative;
		height: 100%;
		width: 100%;
		object-fit: cover;
		margin: 0 auto;
	}
`;

export default function SlashScreen() {
	return (
		<Wrapper className="splash-screen" flexBasis={{ _: "0%", m: "50%" }}>
			<img src={SplashImg} alt="an inclusive couple holding hands" />
		</Wrapper>
	);
}
