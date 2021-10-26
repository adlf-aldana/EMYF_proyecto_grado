import styled from 'styled-components';


export const ContainerRep = styled.div`
	display: grid;
	grid-template-rows: 60px auto;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						 "Contenido";
	grid-gap: 30px;
    background-color: #transparent;
`;


export const HeaderRep = styled.div`
	grid-area: header;
	background: linear-gradient(200deg,rgba(247,203,107,1),#fba980);
	padding: 5px;
	display: grid;
	grid-template-columns: auto 350px;
	grid-template-rows: 50px;
	align-items: center;

	grid-template-areas: "title search";
`;

export const HeaderRepSec = styled.div`
  grid-area: header;
  background: linear-gradient(200deg,#dee2fb,#626fbf);
  padding: 5px;
  display: grid;
  grid-template-columns: auto 350px;
  grid-template-rows: 50px;
  align-items: center;

  grid-template-areas: "title search";
`;

export const TitleRep= styled.p`
	grid-area: title;
	color: #626fbf;
  font-weight: bold;
    font-size: 18px;
	text-align: left;
  padding: 0 0 0 20px;
`;

export const TitleSec = styled.p`
  color: #ffae28;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  padding: 0 0 0 20px;
`;

export const TableroBuscarRep = styled.div`
    grid-area: search;
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
`;


export const ContenidoTableRep = styled.div`
  
  display: grid;
  overflow:auto;
  padding: 10px 10px 70px 10px;
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
    text-align: left;
  }

  th, td {   
    //border: 1px solid #efc580;

  }

  table {    
    height: 50px;
    border-collapse: collapse;
  }

  table tbody tr:nth-child(even){
   
    background:#faf2b9;
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
    background: linear-gradient(200deg,rgba(247,203,107,1),#fba980);
    
  }

  table tbody tr:hover {
    background-color: #ececec;
    transition: 0.3s ease;
  }

`;
export const Input = styled.input`
    text-decoration: none;
    width: 400px;
    height: 25px;
    outline: none;
    font-size: 16px;
    color: #626fbf;;
    text-align: left;
    background: #ffffff;
    border-color: #fad28f;
    border-radius: 5px;

    @media screen and (max-width: 980px){
    width: 250px;
  }
`;

export const ContenidoTableRepSec = styled.div`
  
  display: grid;
  overflow:auto;
  padding: 10px 10px 70px 10px;
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
    text-align: left;
  }

  th, td {   
    //border: 1px solid #efc580;

  }

  table {    
    height: 50px;
    border-collapse: collapse;
  }

  table tbody tr:nth-child(even){
   
    background:#faf2b9;
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
    background: linear-gradient(200deg,#dee2fb,#626fbf);
    
  }

  table tbody tr:hover {
    background-color: #ececec;
    transition: 0.3s ease;
  }

`;
