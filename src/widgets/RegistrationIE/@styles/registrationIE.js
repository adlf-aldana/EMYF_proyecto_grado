import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-rows: 60px auto;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						 "contenido";
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



  }
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
    background-color: rgb(0 0 0 / 0%);
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
    font-size: 14px;
    margin: 4px 8px 8px 8px;
}
`;


export const Title = styled.p`
	grid-area: title;
	color: #626fbf;
  font-weight: bold;
    font-size: 18px;
	text-align: center;
  @media screen and (max-width: 980px){
    
    font-size: 14px;
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
    
    grid-area: contenidoP;
    justify-content: left;
    padding: 10px 10px 10px 10px;
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
    padding: 10px 20px;
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


export const EditIcon = styled.button`
    grid-area: edit;
    color: #ffae28;
    margin: 0 0 7px 0;
    font-size: 20px;
    background:transparent;
    border: 0;

`;

export const Delete = styled.button`
    grid-area: delete;
    color: #ffae28;
    margin: 0 0 7px 0;
    font-size: 20px;
   background:transparent;
    border: 0;

`;

export const Income = styled.button`
    display: grid;
    grid-area: income;
    margin: 0 0 6.2px 0;
    font-size: 16px;
    color: #ffae28;
    border: 0;
    text-align: left;
    background:transparent;
    align-items: center;
    justify-content: center;
`;

export const Egress= styled.button`
    display: grid;
    grid-area: egress;
    margin: 0 0 6.2px 0;
    font-size: 16px;
    color: #626fbf;
    border: 0;
    text-align: left;
    background:transparent;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;