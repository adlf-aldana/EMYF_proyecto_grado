import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
    grid-template-columns: minmax(200px, 430px);
    grid-template-rows: 70px min-content;
    grid-template-areas:
        "empty"
        "setting";
    justify-content: center;
`;

export const ContainerSetting = styled.div`
	grid-area: setting;
	border-radius: 10px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #ffffff;
    display: grid;

    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    padding: 10px;

      -webkit-animation: flipInX;
    animation: flipInX;
    -webkit-animation-duration: .8s;
    animation-duration: .8s;
`;

export const Title = styled.p`
	color: #7e878a;
	font-size: 14px;
	font-weight: bold;
	height: 20px;
`