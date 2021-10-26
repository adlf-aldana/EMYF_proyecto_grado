import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 1fr;
  grid-template-areas: "header"
                        "contenido";
  grid-gap: 30px;
  padding: 10px 10px 10px 10px;
    background-color: #transparent;
`;

export const Header = styled.div`
  grid-area: header;
  display: grid;
  background-color: transparent;
  grid-template-rows: auto;
  grid-template-columns: 1fr 120px 120px;
  grid-template-areas: "vacio buttonE buttonCo";
  border: 0;
  align-items: center;
`;

export const Employee = styled.div`
  grid-area: buttonE;
  display: grid;
`;

export const Buy = styled.div`
  grid-area: buttonCo;
  display: grid;
`;

export const ButtonHeader = styled.button`
    
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #626fbf;
    font-size: 12px;
    color: #ffffff;
    border: 0;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
	  grid-area: contenido;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3,minmax(280px,auto));
    grid-auto-flow: dense;
    grid-auto-rows: min-content;
    grid-gap: 80px;
    width: 100%;
    justify-content: center;
     @media screen and (max-width: 980px){
    grid-template-columns: repeat(1,minmax(280px,auto));
  }

`;


export const ContainerForm = styled.div`
	display: grid;
	width: 270px;
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