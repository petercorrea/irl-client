import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Global.css";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

let MobileNavBarContainer = styled.div`
	width: 80%;
	height: 80px;
	background-color: black;
	position: absolute;
	bottom: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	border-radius: var(--border-radius);
`;

export default function MobileNavBar() {
	return (
		<MobileNavBarContainer>
			<FontAwesomeIcon className="icons" icon={faHome} />
			<FontAwesomeIcon className="icons" icon={faUser} />
		</MobileNavBarContainer>
	);
}
