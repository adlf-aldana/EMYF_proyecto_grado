import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-rows: 55px auto;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						 "Contenido";
	grid-gap: 30px;
    background-color: #transparent;
`;


export const Header = styled.div`
	grid-area: header;
	background: linear-gradient(200deg,rgba(247,203,107,1),#fba980);
	
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 1fr;
	align-items: center;

	grid-template-areas: "backButton title";

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


export const DownloadButton = styled.button`
	grid-area: download;
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
  padding: 5px;
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
    padding: 5px;
    text-align: center;
  }

  th, td {   
    border: 1px solid rgba(247,203,107,1);
  }

  table {    
    height: 50px;
    
  }

  table tbody tr:nth-child(even){
   
    background: #eceffe;
  }


  table tbody tr{  

    transition: 0.3s ease;
  }  


  table tbody th, td {
   
    color: #626fbf;
    padding: 15px;
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
    width: 150px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;
    
`;

export const InputSec = styled.input`
    text-decoration: none;
    width: 70px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;

`;

export const InputTer = styled.input`
    text-decoration: none;
    width: 40px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;
`;