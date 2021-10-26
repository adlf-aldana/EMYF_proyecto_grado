import styled from 'styled-components';

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;	
	background-color: rgba(0,0,0,.4);
	display: flex;
	aling-items: center;
	justify-content: center;

	
`;

export const ContenedorModal = styled.div`
	display: grid;
	grid-template-columns: 300px;
	grid-template-rows: 70px auto 60px;
	grid-template-areas: "tittle"
						 "contenido"
						 "button";
	grid-gap: 10px;
	background: #ffffff;
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
	border-collapse: collapse;
	align-self: center;
	-webkit-animation: flipInX;
	animation: flipInX;
	-webkit-animation-duration: .8s;
    animation-duration: .8s;

`;

export const Tittle = styled.div`

    font-weight: bold;
    grid-area: tittle;
    font-size: 20px;
    color: #626fbf;
    text-align: center;
    align-self: center;
`;

export const ContainerInput = styled.div`
	grid-area: contenido;
	
`;
export const Input = styled.input`
	grid-area: ;
	padding: 15px;
    text-decoration: none;
    width: 200px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    justify-self: center;
    background: transparent;
    border-color: transparent;

`;

export const ButtonClose = styled.button`
    grid-area: button;
    width: 230px;
	height: 40px;
    font-size: 16px;
    color: #ffffff;
    border: 0;
    background-color: #626fbf;
    bottom: 20px;
    right: 20px;
	cursor: pointer;
	transition: .3s;
	border-radius: 10px;
	place-self: center;
`;
