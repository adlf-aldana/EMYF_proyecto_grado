import styled from 'styled-components';

export const ContainerModal = styled.div`
	position: fixed;
	background: #ffffff;
	width: 90%;
	height: auto;

	max-width: 200px;
	margin-left: -210px;
    margin-top: 70px;
	z-index: 10;

	padding: 15px 24px 12px 21px;
	border-radius: 10px;
	box-shadow: 0px 5px 9.6px 0.4px rgba(0, 0, 0, 0.25);
	background-color: #ffffff;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 25px 1fr 20px;
	grid-template-areas: "title"
						  "listNotification"
						  "viewAll";

	::before{
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		top: -19px;
		right: 0;
		border-right: 15px solid #ffffff;
		border-top: 15px solid #72171700;
		border-left: 15px solid #f0ad4e00;
		border-bottom: 15px solid #ffffff;
		@media screen and (max-width: 835px){
			right: auto;   
			border-right: 15px solid transparent;
			border-top: 15px solid transparent;
			border-left: 15px solid #ffffff;
			border-bottom: 15px solid #ffffff;
			display: none;
		}
	}

	animation: bounceInDown;
	animation-duration: 0.7s;

	@media screen and (max-width: 835px){
		width: 100%;
		right: 10px;
		margin-left: initial;
		max-width: 200px;		
	};
`;


export const Title = styled.p`
	color: #636e72;
	grid-area: title;
	font-size: 12px;
	padding: 0;
	margin: 0;
`;

export const ViewAll = styled.button`
	grid-area: viewAll;
    background: transparent;
    border: 0;
    color: #636e72;
    font-size: 11px;
    padding: 0;
    margin: 0;
    border-top: 1px solid #f1f1f1;
`;

export const ContainerListNotification = styled.div`
	grid-area: listNotification;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 25px;

`;

export const ItemNotification = styled.p`
    color: ${({color})=>color};
    padding: 5px 0 5px 0;
    margin: 0;
    border-top: 1px solid #f1f1f1;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    :hover{
    	background: #fbfbfb;
    }
`;