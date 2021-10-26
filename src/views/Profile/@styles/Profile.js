import styled from 'styled-components';

export const ContainerProfile = styled.div`
    display: grid;
    grid-template-columns: minmax(200px, 330px);
    grid-template-rows: 70px min-content;
    grid-template-areas:
        "empty"
        "form";
    justify-content: center;
`;


export const ContainerForm = styled.div`
    grid-area: form;
    padding: 15px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 100px 70px auto 70px;
    grid-template-areas:
        "title"
        "photo"
        "email"
        "data"
        "sendButton";
    border-radius: 10px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #ffffff;
    -webkit-animation: flipInX;
    animation: flipInX;
    -webkit-animation-duration: .8s;
    animation-duration: .8s;
`;

export const ContainerTitle = styled.div`
    grid-area: title;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "titleEdit position";
    font-size: 14px;
    color: #7e878a;
`;

export const TitleEdit = styled.p`
    grid-area: titleEdit;
`;

export const Position= styled.p`
    grid-area: position;
    text-align: right;
`;

export const ContainerPhoto = styled.div`
    position: relative;
    grid-area: photo;
    display: grid;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    align-items: center;
    justify-items: center;
`;
export const Photo = styled.div`
    position: relative;
    
    background: url(${props=>props.image||""});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0px 5px 6.7px 0.4px rgba(0, 0, 0, 0.25);

    filter: brightness(0.9);
`;

export const ContainerButton = styled.div`
    grid-area: sendButton;
`;

export const ButtonSave = styled.button`
    width: 80%;
    height: 35px;
    border-radius: 10px;
    box-shadow: 0px 5px 25.9px 1.1px rgba(0, 0, 0, 0.25);
    background-color: ${({enabled})=>enabled?"#626fbf":"#9ea4ce"};
    cursor:${({enabled})=>enabled?"pointer":"no-drop"};
    margin: 10px 10% 10px 10%;
    color: #ffffff;
    border: 0;
    font-size: 14px;
    transition: all 1s ease;
`;

export const PhotoIcon = styled.p`
    position: absolute;
    font-size: 24px;
    color: #ffffff;

    svg{
        -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
        filter: drop-shadow( 0px 0px 1px rgba(0, 0, 0, .7));
    }

`;


export const EmailProfile = styled.p`
    grid-area: email;
    text-align: center;
    color: #636e72;
`;

export const ContainerData = styled.div`
	grid-area: data;
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: 40px;

	grid-gap: 10px;
`;

export const InputData = styled.input`
	background: transparent;
	border: 0;
	border-bottom: 1px solid #e4e4e4;
	text-decoration: none;
	outline: none;
	color: #636e72;
`;


