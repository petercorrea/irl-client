import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../styles/NavBar.css";

const Navigation = styled.div`
	width: 100vw;
	height: 50px;
	color: white;
	background-color: black;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 10px;
	position: absolute;
	left: 0px;
	top: 0px;
	z-index: 100;
`;

export default function NavBar() {
	return <Navigation></Navigation>;
}
