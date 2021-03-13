import React, { useEffect } from "react";
import styled from "styled-components";
import { color, space, flexbox, layout } from "styled-system";
import NavButton from "../../elements/NavButton/NavButton";
import DropDown from "../../form/DropDown/DropDown";
import MultiCheckbox from "../../form/MultiCheckbox/MultiCheckbox";
import STORE from "../../../store";
import HeightSlider from "../../form/HeightSlider/HeightSlider";

const Wrapper = styled.div`
	padding: ${(props) => props.theme.space.padding.container};
	/* height: 100%; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	& > p {
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

// export default function RegisterStep2() {
// 	return (
// 		<Wrapper>
// 			<div>
// 				<h1>Register</h1>
// 				<p>Traits</p>

// 				<InputSwitcher type="name" />
// 				<InputSwitcher type="birthday" />
// 				<InputSwitcher type="email" />
// 				<InputSwitcher type="password" />
// 				<DropDown title="views" values={["Liberal", "Conservative"]} />
// 				<DropDown title="other" values={["Liberal", "Conservative"]} />

// 				<FlexRow>
// 					<NavButton text="prev" to="/register-step-1" />
// 					<NavButton text="submit" to="/" />
// 				</FlexRow>
// 			</div>
// 		</Wrapper>
// 	);
// }

const Registration = styled.div`
	/* background-color: lightblue; */
	position: relative;
	width: 100%;
	max-width: 300px;
	/* height: 100%; */
	padding-bottom: 20px;
	/* scroll-snap-type: y mandatory; */
`;

const Question = styled.div`
	width: 100%;
	/* height: 60vh; */
	/* background-color: white; */
	/* border: 2px solid black; */

	/* scroll-snap-align: center; */
`;

const Heading = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export default function RegisterStep2() {
	return (
		<Wrapper className="wrapper">
			<Heading>
				<h1>Register</h1>
				<p>Tell us about you</p>
			</Heading>
			<Registration className="registration-list">
				<Question>
					<DropDown title="gender" values={STORE.STORE.gender} />
				</Question>

				<Question>
					<DropDown title="pronouns" values={STORE.STORE.pronouns} />
				</Question>

				<Question>
					<DropDown title="orientation" values={STORE.STORE.orientation} />
				</Question>

				<Question>
					<HeightSlider />
				</Question>

				<Question>
					<DropDown title="exercise" values={STORE.STORE.exercise} />
				</Question>

				<Question>
					<DropDown title="build" values={STORE.STORE.build} />
				</Question>

				<Question>
					<DropDown title="education" values={STORE.STORE.education} />
				</Question>

				<Question>
					<DropDown title="politics" values={STORE.STORE.politics} />
				</Question>

				<Question>
					<DropDown title="religion" values={STORE.STORE.religion} />
				</Question>

				<Question>
					<DropDown title="pets" values={STORE.STORE.pets} />
				</Question>

				<Question>
					<DropDown title="kids" values={STORE.STORE.kids} />
				</Question>

				<Question>
					<DropDown title="drinking" values={STORE.STORE.drinking} />
				</Question>

				<Question>
					<DropDown title="smoking" values={STORE.STORE.smoking} />
				</Question>

				<Question>
					<DropDown title="drugs" values={STORE.STORE.drugs} />
				</Question>

				<Question>
					<DropDown title="personality" values={STORE.STORE.personality} />
				</Question>

				<Question>
					<DropDown title="type" values={STORE.STORE.type} />
				</Question>

				<Question>
					<DropDown title="lovelang" values={STORE.STORE.lovelang} />
				</Question>
			</Registration>

			<FlexRow>
				<NavButton text="prev" to="/register-step-1" />
				<NavButton text="submit" to="/register-step-2" />
			</FlexRow>
		</Wrapper>
	);
}
