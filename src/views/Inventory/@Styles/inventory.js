import styled from 'styled-components';

export const Container= styled.div`
	width: auto;
	height: auto;
	display: grid;
  	
  background-color: #transparent;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 35px 1fr;
  grid-template-areas: "header"
                        "search"
                        "contenido";

`;

export const Header= styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-area: header;
  grid-template-columns: auto 100px 110px 110px;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  align-items: center;
  grid-template-areas: "vacio new newReporte reporte"; 

  @media screen and (max-width: 980px){
   
    justify-content: center;

  }
`;
export const NewButton = styled.button`
    grid-area: new;
    position: relative;
    margin: 0 auto;
    width: 90px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
    background-color: #626fbf;
    font-size: 12px;
    color: #ffffff;
    border: 0;
    align-items: center;
    justify-content: center;
`;
export const NewReport = styled.button`
    grid-area: newReporte;
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
    display: grid;
    grid-template-columns: 30px auto;
    grid-template-rows: 1fr;
    grid-template-area: "icon text";
`;


export const Reporte = styled.button`
    grid-area: reporte;
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
`;

export const Buscar = styled.div`
    grid-area: search;
    display: grid;
    position: relative;
    grid-template-columns: auto 350px;
    grid-template-rows: 1fr;
    grid-template-areas: "newvacio buscar";

    @media screen and (max-width: 980px){
    
    justify-content: center;

  }
`;

export const TableroBuscar = styled.div`
    grid-area: buscar;
    display: grid;
    width: auto;
    height: auto;
    border-radius: 10px;
    margin: 0 10px 0 0;
    box-shadow: 0px 15px 25.9px 1.1px rgba(0, 0, 0, 0.25);
    background: white;
    position: relative;
    grid-template-columns: auto 50px;
    grid-template-rows: 1fr;
    grid-template-areas: "buscador icon";

    @media screen and (max-width: 980px){
    margin: 0 10px 0 10px;
`;


export const IconBuscar = styled.button`
    grid-area: icon;
    display: grid;
    border: 0;
    color: #636e72;
    background-color: #ffffff;
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

`;

export const ContenidoTable = styled.div`
  
  display: grid;
  overflow:auto;
  padding: 40px 10px 10px 10px;
  display: grid;
  grid-template-columns:min-content;
  
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

  table th, td{
    // border-radius: 5px;
  }

  table tbody th, td {
   
    color: #626fbf;
    padding: 8px 30px 10px 30px;
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


