import styled from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-rows: 55px auto;
	grid-template-columns: 1fr;
	grid-template-areas: "header"
						 "Contenido";
	grid-gap: 50px;
`;


export const Header = styled.div`
	grid-area: header;
	background: linear-gradient(200deg,rgba(247,203,107,1),#fba980);
	
	display: grid;
	grid-template-columns: auto 1fr 100px 120px;
	grid-template-rows: 1fr;
	align-items: center;

	grid-template-areas: "backButton title new download";

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
`;

export const ReportButton = styled.button`
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
	color: #ffffff;
	text-align: center;
`;
