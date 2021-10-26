import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
	body,html{
		margin: 0;
		padding: 0;
		font-family: "Roboto";
	}
	
	button{
        outline: none;
        touch-action: none;
        -webkit-touch-callout:none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        cursor:pointer;
    }
    .Toastify__toast--success{
    	background: #27ae60 !important;
    }

    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }
`;