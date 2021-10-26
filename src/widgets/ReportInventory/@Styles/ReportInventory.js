import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-rows: 60px auto;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						 "Contenido";
	grid-gap: 30px;
    background-color: #transparent;

    @media screen and (max-width: 980px){
    display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: 1fr;
  grid-template-areas: "headerP"
                        "contenidoP";
  grid-gap: 15px;
  background-color: #transparent; 
  
}
`;


export const Header = styled.div`
	grid-area: header;
	background: linear-gradient(200deg,rgba(247,203,107,1),#fba980);
	
	display: grid;
	grid-template-columns: auto 1fr 350px;
	grid-template-rows: 1fr;
	align-items: center;

	grid-template-areas: "backButton title search";

	#test-table-xls-button{
		grid-area: download;
		position: relative;
	    margin: 0 auto;
	    width: 130px;
	    height: 30px;
	    border-radius: 20px;
	    box-shadow: 0px 5px 25.9px 1.1px rgb(0 0 0 / 25%);
	    background-color: #626fbf;
	    font-size: 12px;
	    color: #ffffff;
	    border: 0;
	}
  @media screen and (max-width: 980px){
    display:grid;
    grid-area: headerP;
    grid-template-columns: auto 1fr;
    grid-template-rows: 60px;
    align-items: center;
    justify-content: center;
}
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


export const TableroBuscar = styled.div`
    grid-area: search;
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
    display: grid;
    width: 200px;
    grid-template-columns: 150px 50px;
    
}
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

    @media screen and (max-width: 980px){
    
    margin: 4px 8px 8px 8px;
`;


export const Title = styled.p`
	grid-area: title;
	color: #626fbf;
  font-weight: bold;
    font-size: 18px;
	text-align: center;
`;




export const ContenidoTable = styled.div`
  
  display: grid;
  overflow:auto;
  padding: 10px 10px 10px 10px;
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

  th, td {   
    // border: 1.5px solid #ffae28;
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
    padding: 8px 50px 10px 50px;
    text-align: center;
  }
  table thead tr{
    background: #ffae28 !important;
    
  }

  table tbody tr:hover {
    background-color: #ececec;
    transition: 0.3s ease;
  }

`;
export const Button = styled.button`
    display: grid;   
    font-size: 18px;
    color: #626fbf;
    border: 0;
    background:transparent;
    align-items: center;
    justify-content: center;
`;