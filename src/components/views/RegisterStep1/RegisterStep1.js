import React from "react";
import styled from "styled-components";
import { color, space, flexbox, layout } from "styled-system";
import InputSwitcher from "../../form/InputSwitcher/InputSwitcher";
import NavButton from "../../elements/NavButton/NavButton";

const Wrapper = styled.div`
	padding: ${(props) => props.theme.space.padding.container};
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
`;

export default function RegisterStep1sß() {
	return (
		<Wrapper>
			<div>
				<h1>Register</h1>
				<p>Basic info</p>

				<InputSwitcher type="name" />
				<InputSwitcher type="birthday" />
				<InputSwitcher type="email" />
				<InputSwitcher type="password" />

				<FlexRow>
					<NavButton text="prev" to="/" />
					<NavButton text="next" to="/register-step-2" />
				</FlexRow>
			</div>
		</Wrapper>
	);
}
