import styled from 'styled-components';

export const Contenedor = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
	display: grid;
	grid-template-rows: 40px auto 60px;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						 "contenido"
						 "save";
	grid-gap: 30px;
	padding: 10px 10px 10px 10px;
    background-color: #transparent;
`;

export const Header = styled.div`
	grid-area: header;
	display: grid;
	background-color: transparent;
	grid-template-rows: auto;
	grid-template-columns: auto 120px 120px 350px;
	grid-template-areas: "vacio button buttonRe buscar";
	border: 0;
	align-items: center;
  @media screen and (max-width: 980px){
    grid-template-columns: auto 90px 90px 200px;
    justify-content: center;
    grid-column-gap: 8px;
  }
    
`;

export const Title = styled.p`

  color: #626fbf;
  font-weight: bold;
    font-size: 18px;
  text-align: center;
`;



export const Reporte = styled.div`
	grid-area: button;
	display: grid;
	align-items: center;
    justify-content: center;

    

  }
`; 
export const Registro = styled.div`
	grid-area: buttonRe;
	display: grid;
	align-items: center;
    justify-content: center;
     

  }
`;

export const Guardar = styled.div`
	grid-area: save;
	display: grid;
	background-color: transparent;
	grid-template-rows: auto;
	grid-template-columns: auto 120px;
	grid-template-areas: "vacio guardar";
	border: 0;
	align-items: center;
`;

export const ButtonGuardar = styled.div`
	grid-area: guardar;
	display: grid;
	align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #626fbf;
    font-size: 12px;
    color: #ffffff;
    border: 0;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 980px){
    width: 90px;
    justify-content: center;

  }
`;

export const TableroBuscar = styled.div`
    grid-area: buscar;
    display: grid;
    width: auto;
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 15px 25.9px 1.1px rgba(0, 0, 0, 0.25);
    background: white;
    position: relative;
    grid-template-columns: auto 50px;
    grid-template-rows: 1fr;
    grid-template-areas: "buscador icon";

    @media screen and (max-width: 980px){
   grid-template-columns: 150px 50px;
    grid-template-rows: 1fr;
    width: 200px;

  }
`;


export const IconBuscar = styled.button`
    grid-area: icon;
    display: grid;
    width: auto;
    height: 40px;
    border: 0;
    color: #636e72;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 16px;

`;

export const Buscador = styled.input`
    grid-area: buscador;
    text-decoration: none;
    outline: none;
    margin: 8px 15px 15px 15px;
    font-size: 16px;
    color: #636e72;
    margin-left: 20px;
    text-align: left;
    background: transparent;
    border-color: transparent;

    @media screen and (max-width: 980px){
   font-size: 12px;

  }
`;


export const ContenidoTable = styled.div`
  grid-area: contenido;
  overflow:auto;
  padding: 40px 0 0 0;
  display: grid;
  grid-template-columns:max-content;
  
  justify-content: center;
  grid-template-areas:"tableData";


  @media screen and (max-width: 980px){
    justify-content: left;
  }

  table {
    
    grid-area:tableData;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff
  }
  th, td {  
    color: #ffffff;
    padding: 10px;
    text-align: center;
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
    padding: 15px 20px;
    text-align: center;
  }
  table thead tr{
    background: #626fbf;
    
  }

  
head tr{
    background: #626fbf !important;
    
  }

  table tbody tr:hover {
    background-color: #ececec;
    transition: 0.3s ease;
  }

`;


