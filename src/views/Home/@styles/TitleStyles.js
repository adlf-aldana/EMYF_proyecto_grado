import styled from "styled-components";

import { mediaQuery } from './mediaQuerys';



export const ContainerTitle = styled.div`
	grid-area: title;
	display: grid;
	justify-content: center;
	align-items: center;
`;

export const  TitleText = styled.h1`
	color: #ffffff;
	text-transform: uppercase;
	text-align: center;


	${
		mediaQuery(`
			color: #636e72;
			font-size: 14px;
		`,700)
	}


`;
