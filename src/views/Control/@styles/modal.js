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
	width: 750px;
	height: 630px;
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

export const ButtonClose = styled.button`
    position: absolute;
    width: 150px;
	height: 40px;
    font-size: 16px;
    color: #ffffff;
    border: 0;
    background-color: #626fbf;
    bottom: 20px;
    right: 20px;
	cursor: pointer;
	transition: .3s;
	border-radius: 20px;
	
`;

