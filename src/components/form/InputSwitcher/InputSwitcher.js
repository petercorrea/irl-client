import React from "react";
import NameInput from "../NameInput/NameInput";
import BirthdayInput from "../BirthdayInput/BirthdayInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import EmailInput from "../EmailInput/EmailInput";

export default function InputSwitcher({ type }) {
	switch (type) {
		case "name": {
			return <NameInput />;
		}

		case "birthday": {
			return <BirthdayInput />;
		}

		case "email": {
			return <EmailInput />;
		}

		case "password": {
			return <PasswordInput />;
		}

		default: {
			return;
		}
	}
}
