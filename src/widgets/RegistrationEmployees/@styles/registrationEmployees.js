import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-rows: 60px 1fr 60px;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						           "contenido"
						           "button";
	grid-gap: 30px;
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

export const Contenido = styled.div`
  display: grid;
  padding: 10px 50px;
  grid-area: contenido;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 1fr;
  grid-template-areas:"first"
                      "second";
`;

export const PartFirst = styled.div`
  display: grid;
  grid-area: first;
  grid-template-columns: auto 280px;
  grid-template-rows: 1fr;
  grid-template-areas:"info photo";
`;
export const Info = styled.div`
  display: grid;
  grid-area: info;

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
`;


export const PartSecond = styled.div`
  display: grid;
  grid-area: second;
  witgh: 100%;
  height: 100%;
`;

export const ContenidoTable = styled.div`
 
  overflow:auto;
  padding: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns:max-content;
  
  justify-content: center;
  grid-template-areas:"tableData";


  @media screen and (max-width: 980px){
    
  }

  table {
    
    grid-area:tableData;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
  }
  th, td {  
    color: #ffffff;
    padding: 10px;
    text-align: center;
  }

  th, td {   
    // border: 1.5px solid #ffae28;
  }

  table {    
    height: 50px;
    border-collapse: collapse;
  }

  table tbody tr:nth-child(even){
   
    background: #eceffe;
  }


  table tbody tr{  

    transition: 0.3s ease;
  }  

  table tbody th, td {
   
    color: #626fbf;
    padding: 10px;
    text-align: center;
  }

  table thead tr{
    background: #626fbf !important;
    
  }

  table tbody tr:hover {
    background-color: #ececec;
    transition: 0.3s ease;
  }

`;
export const Input = styled.input`
    text-decoration: none;
    width: 200px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;
`;

export const InputSec = styled.input`
    text-decoration: none;
    width: 65px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;
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