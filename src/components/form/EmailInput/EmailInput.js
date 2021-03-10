import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";

export default function EmailInput() {
	return (
		<div>
			<Input
				id="email"
				name="email"
				placeholder=" "
				type="email"
				required
				autoComplete="email"
			/>
			<Label htmlFor="email">email</Label>
		</div>
	);
}
