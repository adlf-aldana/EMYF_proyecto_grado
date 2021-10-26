import styled from 'styled-components';
import { mediaQuery } from './mediaQuerys';

export const Button = styled.button`
	border: 0;
	border-radius: 25px;
	box-shadow: 0px 9px 25.6px 6.4px rgba(0, 0, 0, 0.25);
	background: #ffffff;

	display: grid;
	grid-template-columns: 1fr 45px;

	justify-content: center;
    align-items: center;
	color: #b2bec3;
    transition: 0.5 ease;

    animation: bounceInRight;
    animation-duration: .8s;



    p{
    	padding:0;
    	margin:0;
    }
    span{
    	color: ${props=>props.colorIcon}
    }
`;

export const LoginTitleText = styled.h1`
    color: #b2bec3;
    text-align: center;
    font-size: 22px;

    display: none;
    margin: 0;
    padding: 0;
    ${
        mediaQuery(`
            display: block;
        `,700)
    }
`