import styled from "styled-components"

import { mediaQuery } from './mediaQuerys';

export const ContainerCopyright = styled.div`
	grid-area: copyright;
	display: grid;
	grid-template-columns: 1fr 210px;
	grid-template-areas: "empty copyrightText";

	${
		mediaQuery(`
			grid-template-areas: "copyrightText copyrightText";			
		`,700)
	}
`;

export const CopyrightText = styled.p`
	grid-area: copyrightText;
	color: #ffffff;
	font-size: 9px;

	${
		mediaQuery(`
			text-align: center;
			color: #b2bec3;			
		`,700)
	}

`;