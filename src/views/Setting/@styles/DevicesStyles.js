import styled from 'styled-components';

export const Container = styled.div`
	height: auto;
	padding: 10px;
	border-radius: 10px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;

    grid-gap:10px;

`;


export const SeccionName = styled.p`
	color: #7e878a;
	font-size: 14px;
`;


export const ContainerCode = styled.div`
	border: 1px solid #f3f2f2;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 1fr;
    grid-template-areas: "code confirm";
    padding: 5px;
`;

export const CodeInput = styled.input`
	grid-area: code;
	background: transparent;
    border: 0;
    -webkit-text-decoration: none;
    text-decoration: none;
    outline: none;
    color: #636e72;
`;

export const ButtonConfirm = styled.button`
	border: 0;
    box-shadow: 2px 3px 6px 0px rgb(0 0 0 / 25%);
    border-radius: 10px;
    background: #f39c12;
    color: #ffffff;
    cursor: pointer;
    max-height: 25px;
    padding: 5px;
    margin: auto 0;
`;



export const DeviceVerifyContainer = styled.div`
    border: 1px solid #f3f2f2;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "message";
    padding: 5px;
    p{
        color: #7e878a;
        font-size: 12px;
        margin: 5px;
        padding: 0;
        text-align: center;
    }
`;


export const Message = styled.p`
    color:#e67e22 !important;
    font-weight: bold;
`;