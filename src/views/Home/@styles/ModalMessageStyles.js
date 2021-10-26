import styled from 'styled-components';
import userDefault from './../../../sources/images/userDefault.png';

export const ContainerModalMessage = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;

	grid-template-areas: "cmm cmm cmm"
						 "lcmm modalMessageData rcmm"
						 "lcmm bcmm rcmm";


	background: #00000078;
	backdrop-filter: blur(5px);

    overflow: auto;

	z-index: 4;

	animation: fadeIn;
	animation-duration: 1s;

	@media screen and (max-width: 950px){
		grid-template-columns: .5fr 1fr .5fr;
	}


	@media screen and (max-width: 630px){
		grid-template-columns: .1fr 1fr .1fr;
	}
`;


export const ModalMessageData = styled.div`
	grid-area: modalMessageData;
	background: #ffffff;
	border-radius: 10px;
	box-shadow: 0px 9px 25.6px 6.4px rgba(0,0,0,0.25);

	display: grid;

	grid-template-columns: 1fr;

	grid-template-rows: 30px 100px 50px 1fr 40px;

	grid-gap: 10px;

	grid-template-areas: "modalMessageHeader"
						 "modalMessageImageUser"
						 "modalMessageEmailUser"
						 "modalMessageMessage"
						 "modalMessageOptions";
	padding: 10px;
`

export const Header = styled.div`
	grid-area: modalMessageHeader;

	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 30px;

	grid-template-areas: "emptyHeader buttonCloseMessage";
`;

export const ButtonClose = styled.button`
	border: 0;
	background: #ffffff;
	grid-area: buttonCloseMessage;
	border-radius: 50%;
	color: #d63031;
	padding: 0;

	span{
		font-size: 23px;
	}
`;



export const ImageProfile = styled.div`
    position: relative;
    margin: 0 auto;
    
    box-shadow: 0px 5px 25.9px 1.1px rgba(0, 0, 0, 0.25);
	grid-area: modalMessageImageUser;

	background: url(${ props => props.imageProfileUser !== "" ? props.imageProfileUser : userDefault });

	width: 98px;
	border: 2px solid #ffffff;

	background-repeat: no-repeat;
	background-size: cover;
	background-position:center;

	border-radius: 50%;
	background-color: #ffffff;
`;


export const EmailText = styled.p`
	grid-area: modalMessageEmailUser;
	padding: 0;
	margin: 0;

	text-align: center;
	color: #ffbe14;

	font-weight: bold;

	span{
		color: #636e72;
	}
`;

export const Message = styled.div`
	grid-area: modalMessageMessage;
    // box-shadow: 0px 5px 25.9px 1.1px rgba(0,0,0,0.25);
    border-radius: 10px;
    text-align: center;
    color: #636e72;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
`;

export const IconFace = styled.span`
	font-size: 35px;
	color: ${ props => props.active ? "#626fbf" : "#d63031" }
`;

export const ContainerOptions = styled.div`

	grid-area: modalMessageOptions;

	display: grid;

	grid-template-columns: 1fr 150px;

	grid-template-areas: "emptyOptions buttonModal";

`;

export const ButtonModal = styled.button`
	grid-area: buttonModal;
	border: 1px  solid ${  props => props.active ? "#626fbf" : "#d63031" };
	border-radius: 30px;
	font-size: 18px;	
	background: #ffffff;
	color: ${  props => props.active ? "#626fbf" : "#d63031" };

	display: grid;
	grid-template-columns: 1fr 50px;
	align-items: center;
    justify-items: center;
`;