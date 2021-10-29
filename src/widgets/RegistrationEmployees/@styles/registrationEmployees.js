import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-rows: 60px 1fr 60px;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						           "contenido"
						           "button";
	grid-gap: 30px;

  @media screen and (max-width: 980px){
    display: grid;
    grid-template-columns: 100%;
  }
`;


export const Header = styled.div`
	grid-area: header;
	background: linear-gradient(200deg,rgba(247,203,107,1),#fba980);
	
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr;
	align-items: center;

	grid-template-areas: "backButton title";

`;

export const BackButton = styled.button`
	grid-area: backButton;
	display: grid;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 0;
    box-shadow: 0px 5px 9.6px 0.4px rgb(0 0 0 / 25%);
    background-color: #fdfdfd;
    margin-left: 20px;
    color: #626fbf;
    font-size: 20px;
`;

export const Title = styled.p`
	grid-area: title;
	font-weight: bold;
	color: #626fbf;
	text-align: center;
`;

export const ContainerContenido = styled.div`
  grid-area: contenido;
  padding: 10px 70px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "interfaz1"
                        "interfaz2";

  @media screen and (max-width: 980px){
    padding: 10px 10px;
  }

`;
export const ContainerPI = styled.div`
  grid-area: interfaz1;
  display: grid;
   grid-gap: 15px;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-template-areas: "info1 photo";


`;
export const Photo = styled.div`
    
    position: relative;
    grid-area: photo;
    width: 200px;
    height: 200px;
    place-self: center;
    border: 1px;
    border-color: #626fbf;
    box-shadow: 0px 5px 6.7px 0.4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 980px){
      width: 100px;
      height: 100px;
      margin-block-start: 15px;
    place-self: flex-start;
    }
`;

export const Info1 = styled.div`
    grid-area: info1;
    position: relative;
    grid-template-columns: 1fr;
    grid-auto-rows: 30px auto;
    grid-template-areas: "titulo"
                        "dataPersonal";
    @media screen and (max-width: 980px){
    grid-auto-rows: 30px auto;
  }
                            
`;

export const DataPersonal = styled.div`
    grid-area: dataPersonal;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2,minmax(30px, 50%));
    grid-auto-flow: dense;
    grid-auto-rows: min-content;
    width: 98%;
    -webkit-box-pack: center;

    @media screen and (max-width: 980px){
      grid-template-columns: repeat(1,minmax(30px, 100%));
    }
`;

export const Info2 = styled.div`
    grid-area: interfaz2;
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto 30px auto 30px auto;
    grid-template-areas: "first"
                         "tituloGen"
                         "dataGen"
                         "tituloLab"
                         "dataLab";
`;

export const First = styled.div`
    grid-area: first;
    position: relative;
`;

export const TituloGen = styled.div`
    grid-area: tituloGen;
    position: relative;
`;

export const TituloLab = styled.div`
    grid-area: tituloLab;
    position: relative;
`;

export const DataGen = styled.div`
    grid-area: dataGen;
    position: relative;
    padding-block-start: 30px;
`;

export const DataLab = styled.div`
    grid-area: dataLab;
    position: relative;
    padding-block-start: 30px;
`;

export const Datos = styled.div`
    
    position: relative;
    display: grid;
    grid-template-columns: repeat(4,minmax(30px,auto));
    grid-auto-flow: dense;
    grid-auto-rows: min-content;
    width: 100%;
    -webkit-box-pack: center;

    @media screen and (max-width: 980px){
      grid-template-columns: repeat(2,minmax(30px, 50%));
    }

`;
export const Text = styled.p`
    color: #626fbf;
    font-weight: bold;
    padding: 0 10px;
    text-align: left;


    @media screen and (max-width: 980px){
      font-size: 14px;
      margin: 0 15px;
    }
`;


export const Titulo = styled.p`
    grid-area: titulo;
    color: #ffffff;
    position: relative;
    font-weight: bold;
    text-align: center;
    width: 98%;
    height: 40px;
    background-color: #626fbf;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0 10px 0 0;
    display: grid;
    align-content: center;
    @media screen and (max-width: 980px){
      font-size: 14px;
    }

`;

export const Input = styled.input`
    text-decoration: none;
    padding: 10px;
    width: auto;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;

    @media screen and (max-width: 980px){
      font-size: 12px;
    }
`;


export const ButtonSave = styled.button`
	grid-area: button;
    position: relative;
    margin: 0 auto;
    width: 110px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #626fbf;
    font-size: 12px;
    color: #ffffff;
    border: 0;
`;