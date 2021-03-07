import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import styled from "styled-components";

export default function NameInput() {
	return (
		<>
			<Input
				id="name"
				name="name"
				placeholder=" "
				type="text"
				required
				autoComplete="name"
			/>
			<Label htmlFor="name">name</Label>
		</>
	);
}
