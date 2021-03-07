import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";

export default function BirthdayInput() {
	return (
		<div>
			<Input
				type="text"
				id="bday"
				name="bday"
				autoComplete="bday"
				required
				placeholder=" "
			></Input>
			<Label htmlFor="bday">birthday</Label>
		</div>
	);
}
