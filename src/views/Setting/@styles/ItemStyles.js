import styled from 'styled-components';

export const DeviceItem = styled.div`
	border: 1px solid #f3f2f2;
	border-radius: 10px;

	display: grid;
	grid-template-columns: 1fr 100px;
	grid-template-rows: 1fr;

	grid-template-areas: "nameDevice action";
	padding:5px;
`

export const NameDevice = styled.p`
	color: ${({isMyDevice})=>isMyDevice?"#626fbf":"#7e878a"};
	font-size:12px;
	margin:5px;
	padding:0;
`;

export const CloseSession = styled.button`
	border: 0;
    box-shadow: 2px 3px 6px 0px rgb(0 0 0 / 25%);
    border-radius: 10px;
    background: #636e72;
    color: #ffffff;
    cursor: pointer;
    max-height: 25px;
    padding: 5px;
    margin: auto 0;
`