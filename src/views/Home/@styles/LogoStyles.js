import styled from "styled-components"
import logoWhiteText from './../../../sources/images/LogoTextoWhite.png';
import logoNormal from './../../../sources/images/LogoText.png'

import { mediaQuery } from './mediaQuerys';


export const ContainerLogo = styled.div`
	grid-area: logo;
	display: grid;
	grid-template-columns: 150px 1fr;
`;

export const LogoImage = styled.div`

	background: url(${logoWhiteText});
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

	${
		mediaQuery(`
			background: url(${logoNormal});
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
		`,700)
	}

`;