import styled from "styled-components"

import { mediaQuery } from './mediaQuerys';


export const ContainerReview = styled.div`
	grid-area: review;
	display: grid;
	grid-template-columns: repeat(2,1fr);

	${ 
		mediaQuery(`
			display: none;
		`,700)
	}

`;

export const ReviewText = styled.p`
	color: #ffffff;
	font-size: 10px;
	text-align: justify;
`;