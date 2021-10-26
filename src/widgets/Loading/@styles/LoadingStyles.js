import styled from 'styled-components';
import logoGif from './../../../sources/images/loading.gif';

export const ContainerLoading = styled.div`
	position: fixed;
	background: #ffffff;

	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr 2fr 1fr;

	grid-template-areas: "a a a"
						 "b loading c"
						 "b d c";
	z-index: 4;

	@media screen and (max-width: 300px){
		grid-template-columns: .1fr 2fr .1fr;;
	}
`;

export const LoadingData = styled.div`
	grid-area: loading;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;

	grid-template-areas: "logoLoading"
						 "logoText";


`;


export const LogoLoading = styled.div`
	grid-area: logoLoading;
	background: url(${logoGif});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

export const TextLoading = styled.p`
	color: #337296;
	font-size: 17px;
	text-align: center;

	@media screen and (max-width: 300px){
		font-size: 13px;
	}
`