import styled from 'styled-components';

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
    	color: ${ props => props.colorIcon }
    }
`;

export const InputEmail = styled.input`
    border: 0;
    background: transparent;
    border-bottom: 1px solid ${ props => props.error ? "#c0392b" :"#b2bec3" };
    color: #4150b1;
    outline: none;

    ${
        props => props.error ? `
            animation: shakeX;
            animation-duration: .8s;
        `: ''
    }

    ::placeholder {
      color: "#b2bec3";
      // color: ${ props => props.error ? "#c0392b" :"#b2bec3" };

    }

    transition: .5s ease;

`;

export const MessageErrorContainer = styled.p`
    
    padding: 0;
    margin: 0;
    text-align: center;
    color: #e74c3c;

    animation: pulse;
    animation-duration: .8s;

    transition: .5s ease;
`