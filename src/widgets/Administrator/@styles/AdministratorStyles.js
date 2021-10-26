import styled from 'styled-components';


export const ContainerAdministrator = styled.div`
	position: absolute;
	width: 100%;
	height: auto;

	left: 0;
	right: 0;

	display: grid;

	grid-template-columns: 260px 1fr;
	grid-template-rows: 70px 1fr;

	grid-template-areas: "menu containerHeader"
						 "menu containerDataAmin";


	@media screen and (max-width: 835px){
		grid-template-areas: "containerHeader containerHeader"
							 "containerDataAmin containerDataAmin";
		grid-template-rows: auto 1fr;
	};

`;

export const ContainerMenu = styled.div`
	position: sticky;
	top: 0;
	align-self: start;
	
	grid-area: menu;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
	overflow: auto;
	


	@media screen and (max-width: 835px){
		display: none;
	};
`;

export const ContainerData = styled.div`
	grid-area: containerDataAmin;
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

`;

export const ContainerHeader = styled.div`
	grid-area: containerHeader;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;

`;


export const BackgroundAdministrator = styled.div`
	position: fixed;
	height: 48.17vh;

	display: grid;
	grid-template-columns: 260px 1fr;
	grid-template-rows: 1fr;

	grid-template-areas: "emptyBackground gradient";

	top:0;
	left: 0;
	right: 0;

	@media screen and (max-width: 835px){
		grid-template-areas: "gradient gradient";

	};

`;

export const GradientBackground = styled.div`
	grid-area: gradient;
	background-image: linear-gradient(200deg, rgba(247, 203, 107, 1), #fba980);
	border-radius: 0 0 0 35px;

	@media (max-width: 835px){
		border-radius: 0 0 0 0px;		
	};
`;