import styled from 'styled-components';


export const ContainerHeader = styled.div`
	display: grid;
	grid-template-columns: 1fr 70px 70px 200px; 
	grid-template-rows: 1fr;
	grid-template-areas: "section notification photo information";

	@media screen and (max-width: 835px){
		grid-template-columns: 1fr 40px auto; 
		grid-template-rows: 70px 1fr;
		grid-template-areas: "buttonMenu notification section"
							 "photo photo photo" 
							 "information information information";
	};
`;



export const Section = styled.p`
	color: #ffffff;
    padding: 0 0 0 30px;
    font-size: 22px;
	grid-area: section;

	@media screen and (max-width: 835px){
		padding: 0 30px 0 0;
	};
`;


export const ContinerNotifications = styled.div`
	grid-area: notification;
	display: grid;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 835px){
	    justify-content: left;
	};
`;

export const ContainerPhoto = styled.div`
	grid-area: photo;
	display: grid;
    justify-content: right;
    align-items: center;

	@media screen and (max-width: 835px){
		justify-content: center;
	};
`;

export const Photo = styled.div`
	position: relative;
	background: url(${props=>props.image||""});
	background-repeat: no-repeat;
	background-size: cover;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	box-shadow: 0px 5px 6.7px 0.4px rgba(0, 0, 0, 0.25);
	::before{
		content: "";
		height: 10px;
		width: 10px;
		background: #27ae60;
		position: absolute;
		border-radius: 50%;
		right: 0;
		bottom: 0;
		@media screen and (max-width: 835px){
			height: 15px;
			width: 15px;
		};
	}



	@media screen and (max-width: 835px){
		width: 60px;
		height: 60px;
	};
`;

export const ContainerInformation = styled.div`
	grid-area: information;
	display: grid;
    justify-content: left;
    align-items: center;
    padding-left: 15px;
    @media screen and (max-width: 835px){
	    justify-content: center;
    	padding-left: 0;
	};
`

export const Information = styled.p`
	color: #ffffff;
	font-size: 12px;
	@media screen and (max-width: 835px){
	    text-align: center;
		font-size: 16px;
	};
`;

export const ContainerButtonMenu = styled.div`
	position: fixed;
    top: 12px;
	grid-area: buttonMenu;
	display: grid;
	align-items: center;
	z-index: 1;
	@media screen and (min-width: 835px){
	    display: none;
	};
`;

export const ButtonMenu = styled.button`
	display: grid;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	border-radius: 50%;
	border: 0;
    box-shadow: 0px 5px 9.6px 0.4px rgba(0, 0, 0, 0.25);
    background-color: #fdfdfd;

    margin-left: 20px;

    color: #626fbf;
    font-size: 20px;
`;

export const ContainerMenuMobile = styled.div`
	position: fixed;
	background: #00000087;
	top:0;
	left: 0;
	bottom: 0;
	right: 0;

	z-index: 11;
	${
		({openMenu})=>openMenu?`	
			display:grid;
			grid-template-rows: 1fr;
			grid-template-columns: auto 1fr;

			grid-template-areas: "containerMenuMobile empty";
			
			animation: fadeIn;
    		animation-duration: .7s;

		`:`
    		display: none;
		`
	}


	@media screen and (min-width: 835px){
		display: none;   
	};

`;


export const ContainerMenu = styled.div`
	grid-area: containerMenuMobile;
	background: #ffffff;
	display: grid;
	grid-template-columns: 1fr auto;
	grid-template-rows: 1fr;
	overflow: auto;
	
	animation: slideInLeft;
    animation-duration: .4s;
`

export const CloseMenu = styled.button`
	width: 35px;
	height: 35px;
	background: transparent;
	border-radius: 50%;
	border: 0;
	margin: 20px 20px 0px 0px;
	font-size: 20px;
	display: grid;
	justify-content: center;
	align-items: center;
	color: #707070;
`;

export const ButtonEdit = styled.button`
	border-radius: 10px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #ffffff;
    color: #626fbf;
    border: 0;
    height: 30px;
    margin-top: 10px;
    width: 100%;

   	@media screen and (min-width: 835px){
		height: 15px;
		width: 85px;
		margin-top: 5px;
		font-size: 10px;
	};

	display: grid;
	grid-template-columns: 20px 1fr;
	grid-template-rows: 1fr;

	align-items: center;
	justify-content: center;

	p{
		padding: 0;
		margin: 0;
	}

`;