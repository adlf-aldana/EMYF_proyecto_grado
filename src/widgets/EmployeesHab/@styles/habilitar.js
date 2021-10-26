import styled from 'styled-components';

export const ContainerDuo = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 100px auto;
	grid-template-areas: "name"
						 "data";
`;

export const NameC = styled.div`
	grid-area: name;
	display: grid;
`;

export const DataC = styled.div`
	grid-area: data;
	display: grid;
`;

export const ContainerData = styled.div`
	
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 40px;
	padding: 0 50px 70px 50px;
	grid-gap: 8px;
`;

export const InputData = styled.input`
	background: transparent;
	border: 0;
	border-bottom: 1px solid #626fbf;
	font-size: 16px;
	text-decoration: none;
	outline: none;
	color: #626fbf;
`;
export const NameData = styled.p`
    text-align: center;
    color: #636e72;
    font-size: 24px;
    margin: 10px 10px;
`;