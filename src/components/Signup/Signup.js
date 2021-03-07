import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import EmailInput from "../EmailInput/EmailInput";
import NameInput from "../NameInput/NameInput";
import BirthdayInput from "../BirthdayInput/BirthdayInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import MultiCheckbox from "../MultiCheckbox/MultiCheckbox";
import DropDown from "../DropDown/DropDown";

let SignupContainer = styled.div`
	width: 100%;
	height: 100%;
	color: black;
	background-color: white;
	border: 0px black solid;
	margin: 0px;
`;

export default function Signup() {
	return (
		<Container>
			<SignupContainer>
				<h1>Sign Up</h1>
				<form autoComplete="on">
					<NameInput />
					<BirthdayInput />
					<EmailInput />
					<PasswordInput />

					<DropDown
						title="Gender"
						values={["Female", "Male", "Non-Binary", "Other"]}
					/>

					<DropDown
						title="Seeking"
						values={["Female", "Male", "Non-Binary", "Other"]}
					/>

					<DropDown
						title="Relationship"
						values={["Closed", "Casual", "Idk", "Marriage", "Open", "Poly"]}
					/>

					<DropDown
						title="Height"
						values={[
							`< 4" 0'`,
							`4" 1'`,
							`4" 2'`,
							`4" 3'`,
							`4" 4'`,
							`4" 5'`,
							`4" 6'`,
							`4" 7'`,
							`4" 8'`,
							`4" 9'`,
							`4" 10'`,
							`4" 11'`,
							`5" 0'`,
							`5" 1'`,
							`5" 2'`,
							`5" 3'`,
							`5" 4'`,
							`5" 5'`,
							`5" 6'`,
							`5" 7'`,
							`5" 8'`,
							`5" 9'`,
							`5" 10'`,
							`5" 11'`,
							`> 6" 0'`,
						]}
					/>

					<DropDown title="Build" values={["Slim", "Medium", "Large"]} />

					<DropDown title="Exercise" values={["Never", "Sometimes", "Often"]} />

					<DropDown
						title="Kids"
						values={[
							"None",
							"Want",
							"Have and want more",
							"Have and don't want more",
						]}
					/>
					<MultiCheckbox
						title="Animals"
						values={["Dog", "Cat", "Some", "None", "Don't Want"]}
					/>
					<DropDown
						title="Education"
						values={["High School", "Bachelors", "Masters", "PhD", "Other"]}
					/>
					<DropDown
						title="Politics"
						values={["Liberal", "Conservative", "Moderate", "Something else"]}
					/>
					<DropDown
						title="Religion"
						values={[
							"Agnostic",
							"Christianity",
							"Islam",
							"Judaism",
							"Atheist",
							"Spiritual",
							"Other",
						]}
					/>

					<DropDown title="Drinking" values={["Never", "Sometimes", "Often"]} />
					<DropDown title="Smoking" values={["Never", "Sometimes", "Often"]} />
					<DropDown title="Drugs" values={["Never", "Sometimes", "Often"]} />
					<DropDown
						title="Star Sign"
						values={[
							"Aquarius",
							"Pisces",
							"Aries",
							"Taurus",
							"Gemini",
							"Cancer",
							"Leo",
							"Virgo",
							"Libra",
							"Scorpio",
							"Sagittarius",
							"Capricorn",
						]}
					/>

					<button type="submit">Submit</button>
				</form>
			</SignupContainer>
		</Container>
	);
}
