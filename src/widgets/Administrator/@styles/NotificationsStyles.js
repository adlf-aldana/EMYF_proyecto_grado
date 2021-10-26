import styled from 'styled-components';


export const NotificationContainer = styled.p`
	color: #ffffff;
	font-size: 22px;

	${
		({ active }) => active ? `
				::before{	
					content: "";
					position: absolute;
					background: #e74c3c;
					margin-left: 11px;
					height: 8px;
					width: 8px;
					border-radius: 50%;
				}
			`:""
	}

	svg{
		cursor: pointer;
	}
`