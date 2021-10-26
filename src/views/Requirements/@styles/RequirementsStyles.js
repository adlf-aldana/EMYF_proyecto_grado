import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: "header"
                        "items"; 
`;

export const Header = styled.div`
    display: grid;
    grid-area: header;
    grid-template-columns: auto 150px;
    grid-template-rows: 1fr;
    grid-template-areas: "vacio buttonNew";
    align-items: center;
    justify-items: center; 
`;
export const ButtonNew = styled.button`
  grid-area: buttonNew;
  width: 120px;
  height: 30px;
  color: #ffffff;
  border: 0;
  border-radius: 20px;
  background-color: #626fbf;
`;
export const ContainerItem = styled.div`
    grid-area: items;
	position: relative;
    padding: 40px 0 100px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,250px));
    grid-auto-flow: dense;
    grid-auto-rows: min-content;
    grid-gap: 25px;
    width: 100%;
    justify-content: center;


    @media screen and (max-width: 544px){
      grid-template-columns: repeat(auto-fill,minmax(80%,250px)) !important;
    }
	
`;


export const Loading = styled.div`
    width: auto;
    height: auto;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    box-shadow: 0px 15px 25.9px 1.1px rgba(0, 0, 0, 0.25);
    background: white;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 30px 30px;
    grid-template-areas: "information"
                         "button"
                         "date";
    grid-gap: 10px;
    padding:10px;

    animation: jello 1s infinite;
`; 



export const ContainerRequirements  = styled.div`
    grid-area: information;

    display: grid;
    grid-template-columns: .5fr .5fr;
    grid-template-rows: 1fr;

    grid-column-gap: 10px;
`;

export const Info = styled.div`
    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;
    border-radius:10px;
`


export const Button = styled.div`
    position: relative;
    margin: 0 auto;
    grid-area: button;
    width: 80%;
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    color: #ffffff;
    border: 0;

    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;
`;

export const ContainerDate = styled.div`
    border-radius:10px;

    grid-area: date;
    

    animation-duration: 1.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: linear-gradient(to right, #fafafa 8%, #f4f4f4 38%, #fafafa 54%);
    background-size: 1000px 640px;
`;