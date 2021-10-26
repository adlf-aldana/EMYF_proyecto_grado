import styled from 'styled-components';


export const Container = styled.div`
	position: relative;
    padding: 75px 75px 100px 0;
    display: grid;
    grid-template-columns: repeat(3,minmax(280px,auto));
    grid-auto-flow: dense;
    grid-auto-rows: min-content;
    grid-gap: 50px;
    width: 100%;
    justify-content: center;
`;


export const ContainerPatronal = styled.div`
	display: grid;
	width: 280px;
	height: auto;
	display: grid;
  	border-radius: 10px;
  	margin: 10px 10px 10px 10px;
  	box-shadow: 0px 15px 25.9px 1.1px rgba(0, 0, 0, 0.25);
  	background-color: #ffffff;
  	grid-template-columns: 1fr;
  	grid-template-rows: 170px 1fr;
  	grid-template-areas: "icon"
  						 "button";
  	
  	justify-content: center;

    animation: bounceIn;
    animation-duration: .6s;

`;

export const Button = styled.div`
    position: relative;
    margin: 30px auto;
    grid-area: button;
    width: 80%;
    height: 40px;
    border-radius: 10px;
  	box-shadow: 0px 15px 25.9px 1.1px rgba(0, 0, 0, 0.25);
  	background-color: #626fbf;
  	font-size: 16px;
  	color: #ffffff;
    border: 0;
    text-align:center;
    display: grid;
    align-items: center;
  	
    
`;

export const Icon = styled.div`
	position: relative;
    grid-area: icon;
    display: grid;
	padding: 30px 80px 20px 80px;
	font-size: inherit;
	justify-content: center;
	align-items: center;
	font-size: 110px;
	border-radius: 0 10px 10px 0;
	color: #ff8241;
	align-items: center;

 `;
 
