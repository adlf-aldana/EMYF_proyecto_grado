import styled from 'styled-components';


export const ContainerTable = styled.div`
	
	overflow:auto;

	display: grid;
	grid-template-columns:max-content;
	justify-content: center;
	grid-template-areas:"tableData";


	@media screen and (max-width: 980px){
		justify-content: left;
		padding:10px;
	}



	table {
	  grid-area:tableData;
	  border-collapse: collapse;
	}
	th, td {
	  padding: 15px;
	  text-align: center;
	}

	th, td {
	  border: 1px solid #ddd;
	}

	table tbody tr:nth-child(even){
		background-color: #f5f5f5;
	}

	table tbody tr{
		transition: 0.3s ease;
	}

	table thead tr{
		background: #f5f5f5 !important;
	}

	table tbody tr:hover {
		background-color: #ececec;
		transition: 0.3s ease;
	}

`;

export const Input = styled.input`
 	width: auto;  
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