import React from "react";
import styled from "styled-components";
import { color, space, flexbox, layout } from "styled-system";
import InputSwitcher from "../../form/InputSwitcher/InputSwitcher";
import NavButton from "../../elements/NavButton/NavButton";
import TextInput from "../../form/TextInput/TextInput";
import HeightSlider from "../../form/HeightSlider/HeightSlider";
import SingleChoice from "../../form/SingleChoice/SingleChoice";

import MultiChoice from "../../form/MultiChoice/MultiChoice";
import STORE from "../../../store";

const Wrapper = styled.div`
	padding: ${(props) => props.theme.space.padding.container};
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	& p {
		margin-bottom: 40px;
		color: ${(props) => props.theme.colors.black};
	}
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Heading = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export default function RegisterStep1() {
	return (
		<Wrapper>
			<Heading>
				<h1>Register</h1>
				<p>Account info</p>
			</Heading>

			<TextInput type="name" placeholder="name" />

			<MultiChoice title="gender" values={STORE.STORE.gender} />
			<SingleChoice title="education" values={STORE.STORE.education} />

			<FlexRow>
				<NavButton text="prev" to="/" />
				<NavButton text="next" to="/register-step-2" />
			</FlexRow>
		</Wrapper>
	);
}
