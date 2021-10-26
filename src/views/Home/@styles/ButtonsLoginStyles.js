import styled from 'styled-components';
import { mediaQuery } from './mediaQuerys';

export const  ContainerButtonsLogin = styled.div`
	grid-area: buttonsLogin;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    grid-auto-flow: row;
    grid-auto-rows: 40px;
    padding-left: 10px;

    ${
        mediaQuery(`
            padding-left: 80px;
            padding-right: 80px;
        `,700)
    }
    ${
        mediaQuery(`
            padding-left: 10px;
            padding-right: 10px;
        `,400)
    }
`;