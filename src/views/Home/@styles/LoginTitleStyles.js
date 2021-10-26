import styled from 'styled-components';

import { mediaQuery } from './mediaQuerys';

export const ContainerLoginTitle = styled.div`
	grid-area: login;
	display: grid;
    justify-content: end;
    align-content: center;


	${ 
		mediaQuery(`
			display: none;
		`,700)
	}

`;

export const LoginTitleText = styled.h1`
	color: #b2bec3;
`