import styled from "styled-components"
import backgroundImage from "./../../../sources/images/background.jpg";

import logoLogin from './../../../sources/images/abstract.png';

import { mediaQuery } from './mediaQuerys';






export const ContainerBackground = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: url(${backgroundImage});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	overflow: hidden;

	::before{
		content: "";
		position: absolute;
		height: 100vh;
		width: 90vw;
		opacity: 0.96;
  		background-image: linear-gradient(45deg, #f6bf75, #d77185, #8766ac, #4150b1);
  		z-index: 1;
	}

	::after{
		content: "";
		position: absolute;
		height: 150vh;
		width: 40vw;
		right: -15vw;
		top: -25vh;
		background: #ffffff;
		transform: rotate(8deg);
		z-index: 2;
	}

	${ 
		mediaQuery(`
			::after{
				width: 50vw;
			}
		`,800)
	}

	${
		mediaQuery(`
			display: none;
		`,700)
	}
`;

export const ContainerHome = styled.div`
	position: absolute;
	height: calc(100vh - 20px);
	width: calc(100vw - 20px);

	padding: 10px;

	left: 0;
	top: 0;
	z-index: 3;
	display: grid;
	grid-template-rows: 100px 1fr 50px 25px;
	grid-template-columns: 3fr 1fr; 

	grid-template-areas: "logo login"
						 "title containerLogin"
						 "review containerLogin"
						 "copyright containerLogin";

	${ 
		mediaQuery(`
			grid-template-columns: 2fr 1fr;
		`,800)
	}

	${ 
		mediaQuery(`
			grid-template-rows: 70px 50px 1fr 25px;
			grid-template-areas: "logo logo"
								 "title title"
								 "containerLogin containerLogin"
								 "copyright copyright";
			grid-row-gap: 20px;
		`,700)
	}

	overflow-x: hidden;
`;

export const ContainerLogin = styled.div`
	grid-area: containerLogin;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: .4fr .6fr;
	grid-template-areas: "logoApp"
						 "buttonsLogin";
	@media screen and (max-height: 600px ){
		grid-template-rows: .2fr .8fr;
		grid-template-areas: "empty"
						 	 "buttonsLogin";
	}
`;

export const LogoApp = styled.div`
	grid-area: logoApp;
	background: url(${logoLogin});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	background-origin: content-box;
	padding: 30px;
	@media screen and (max-height: 600px ){
		display: none;
	}
`;