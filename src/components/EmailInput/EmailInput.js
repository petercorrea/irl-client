import React from "react";
import Input from "../Input/Input";
import Label from "../Label/Label";
import styled from "styled-components";

export default function EmailInput() {
	return (
		<>
			<Input
				id="email"
				name="email"
				placeholder=" "
				type="email"
				required
				autoComplete="email"
			/>
			<Label htmlFor="email">email</Label>
		</>
	);
}
