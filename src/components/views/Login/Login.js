import React from "react";
import styled from "styled-components";
import LoginOrRegister from "../../form/LoginOrRegister/LoginOrRegister";
import Footer from "../../elements/Footer/Footer";
import SplashScreen from "../../elements/SplashScreen/SplashScreen";
import FlexRow from "../../elements/FlexRow/FlexRow";
import FlexColumn from "../../elements/FlexColumn/FlexColumn";
import { flexbox } from "styled-system";

const Wrapper = styled.div`
	min-height: 100%;
	width: 100vw;
`;

const CenterWrapper = styled.div`
	${flexbox}
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export default function Login() {
	return (
		<Wrapper className="view-login">
			<FlexColumn>
				<FlexRow>
					<SplashScreen />

					<CenterWrapper flexBasis={{ _: "100%", m: "50%" }}>
						<LoginOrRegister />
					</CenterWrapper>
				</FlexRow>

				<Footer />
			</FlexColumn>
		</Wrapper>
	);
}
