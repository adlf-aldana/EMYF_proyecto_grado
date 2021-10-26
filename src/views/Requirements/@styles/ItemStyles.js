import styled from 'styled-components';

export const ContainerForm = styled.div`
	width: auto;
	height: auto;
	display: grid;
  	border-radius: 10px;
  	margin: 10px 10px 10px 10px;
  	box-shadow: 0px 15px 25.9px 1.1px rgba(0, 0, 0, 0.25);
  	background-color: #ffffff;
  	grid-template-columns: 1fr;
  	grid-template-rows: auto 30px 30px;
  	grid-template-areas: "information"
  						 "button"
  						 "date";
  	grid-gap: 10px;

    animation: bounceIn;
    animation-duration: .6s;
 
`;

export const ContainerRequirements  = styled.div`
	grid-area: information;
	display: grid;
	grid-template-columns: .5fr auto;
	grid-template-rows: 1fr;
	grid-template-areas: "info amount";

  grid-column-gap: 10px;

`;

export const ContainerInfo = styled.div`
	grid-area: info;
`;

export const Info = styled.p`
	${({bold})=>bold?"font-weight: bold;":""}
  	font-size: 15px;
  	text-align: left;
  	padding: 0 0 0 10px;
  	color: ${({isInfoSpecification})=>isInfoSpecification?"#636e72":"#626fbf"};
    ${({isInfoSpecification})=>isInfoSpecification?"":"text-transform: uppercase;"}

    strong{
      color:#626fbf;
    }

    @media screen and (max-width: 524px){
      font-size: 14px;
    }
  
`; 


export const ContainerAmount = styled.div`
	grid-area: amount;
	
  	border-radius: 0 10px 0 10px;
  	background-color: #ffae28;

  	display: grid;

  	justify-content: center;
  	align-items: center;


`;

export const ContainerInfoAmount = styled.div`
	height: auto;
	width: auto;
`;

export const InfoAmount = styled.p`
  	font-size: 40px;
  	text-align: center;
  	color: #ffffff;
  	margin: 0;
  	font-weight: bold;

`; 

export const InfoUnit = styled.p`
  	font-size: 12px;
  	text-align: center;
  	color: #ffffff;
  	font-weight: bold;

`; 

export const Button = styled.button`
	position: relative;
	margin: 0 auto;
	grid-area: button;
	width: 80%;
 	height: 30px;
  	border-radius: 10px;
  	box-shadow: 0px 5px 25.9px 1.1px rgba(0, 0, 0, 0.25);
  	background-color: #626fbf;
  	font-size: 12px;
    color: #ffffff;
    border: 0;
`;

export const ContainerDate = styled.div`
	grid-area: date;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: "infoDate time"
`;

export const InfDate = styled.p`
	font-weight: bold;
	grid-area: ${({isLeft})=>isLeft?"infoDate":"time"};
  	font-size: 10px;
  	text-align: ${({isInfDate})=>isInfDate?"left":"right"};
  	color: #636e72;
  	padding: ${({isLeft})=>isLeft?"0 0 0 10px":"0 10px 0 0"};
`;


