import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";

export default function BirthdayInput() {
	return (
		<div>
			<Input
				type="password"
				id="password"
				name="password"
				required
				placeholder=" "
			></Input>
			<Label htmlFor="password">password</Label>
		</div>
	);
}
