import styled from 'styled-components';

export const ContenidoTable = styled.div`
  grid-area: contenido;
  overflow:auto;
  padding: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns:max-content;
  
  justify-content: center;
  grid-template-areas:"tableData";


  @media screen and (max-width: 980px){
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

    border: 1px solid #ffda9d;
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
export const InputPrimary = styled.input`
    text-decoration: none;
    width: 450px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;
`;
export const InputSecundary = styled.input`
    text-decoration: none;
    width: 100px;
    outline: none;
    font-size: 16px;
    color: #000000;
    text-align: left;
    background: transparent;
    border-color: transparent;
`;