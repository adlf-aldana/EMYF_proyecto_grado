import styled from 'styled-components';

export const OverlayEdit = styled.div`
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


export const ContenedorModalEdit = styled.div`
	display: grid;
	grid-template-columns: 400px;
	grid-template-rows: 70px 1fr 60px;
	grid-template-areas: "tittle"
						 "data"
						 "button";
	grid-gap: 20px;
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

export const TittleEdit = styled.div`
    font-weight: bold;
    grid-area: tittle;
    font-size: 20px;
    color: #626fbf;
    text-align: center;
    align-self: center;
`;

export const ContainerData = styled.div`
	grid-area: data;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 40px;

	grid-gap: 10px;
`;

export const InputData = styled.input`
	background: transparent;
	border: 0;
	border-bottom: 1px solid #e4e4e4;
	text-decoration: none;
	outline: none;
	color: #636e72;
	font-size: 14px;
`;

export const ButtonSaveEdit = styled.button`
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