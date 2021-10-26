import styled from 'styled-components';
import logo from './../../../sources/images/LogoText.png';

export const MenuContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 70px 1fr;

	grid-template-areas: "logoMenu"
						 "optionsMenu";
`;

export const LogoMenu = styled.div`
	grid-area: logoMenu;
	background: url(${logo});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: left;
	background-origin: content-box;
    padding: 10px 0px 0px 10px;
`

export const ContainerOptions = styled.div`
	grid-area: optionsMenu;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 40px;
	grid-auto-flow: row;
	grid-gap: 25px;

	padding: 0 15px 0 0;
`;


export const ButtonOption = styled.button`
	position: relative;
	border: 0;
	
	${ props=>props.active ?`
		background-color: #ffffff;
	 	box-shadow: 0px 5px 25.9px 1.1px rgba(0, 0, 0, 0.25);
	`:"background-color: transparent;"}

	border-radius: 0 10px 10px 0;
	color: #636e72;

	display: grid;
	grid-template-columns: 35px 20px 1fr;
	grid-template-rows: 1fr;

	grid-template-areas: "empty icon text";

	align-items: center;

	span{
		grid-area: icon;
		text-align: left;
		${ props=>props.active ?`
			color: #626fbf;
		`:""}
	}

	p{
		grid-area: text;
		text-align: left;
	}

	${ props=>props.active ?`
		::before{
			position: absolute;
		    content: "";
		    background: #626fbf;
		    height: 100%;
		    width: 5px;
		}
	`:""}

`;

export const MenuTitle = styled.p`
	border: 0;
    margin: 0 0 0 29px;
    color: #636e72;
`