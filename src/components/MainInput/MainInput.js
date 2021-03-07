import React from "react";
import styled from "styled-components";
import NameInput from "../NameInput/NameInput";
import BirthdayInput from "../BirthdayInput/BirthdayInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";

let Wrapper = styled.div`
	height: var(--form-input-height);
	margin-bottom: 20px;
`;

export default function MainInput({ type }) {
	switch (type) {
		case "name": {
			return (
				<Wrapper>
					<NameInput />
				</Wrapper>
			);
			// break;
		}

		case "birthday": {
			return (
				<Wrapper>
					<BirthdayInput />
				</Wrapper>
			);
			break;
		}

		case "email": {
			return (
				<Wrapper>
					<EmailInput />
				</Wrapper>
			);
			break;
		}

		case "password": {
			return (
				<Wrapper>
					<PasswordInput />
				</Wrapper>
			);
			break;
		}

		default: {
			return "";
		}
	}
}
