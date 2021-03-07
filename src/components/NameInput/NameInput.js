import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";

export default function NameInput() {
	return (
		<div>
			<Input
				id="name"
				name="name"
				placeholder=" "
				type="text"
				required
				autoComplete="name"
			/>
			<Label htmlFor="name">name</Label>
		</div>
	);
}
