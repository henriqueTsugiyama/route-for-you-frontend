import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    height: 20vh;
    margin: 1.5%;
    h1 {
        margin-bottom: 10px;
    }
`;

export const InputModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #a1b2bf;
    min-height: 15vh;
    max-width: 70vw;
    min-width: 60vw;
    padding: 2%;

    border-radius: 7px;
    border: 1px solid black;
    p {
        color: black;
        background-color:  #a1b2bf;
    }

`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 22px;
    padding: 1.5%;
    margin: 20px;
    background-color: #a1b2bf;
    
`;
export const Button = styled.button` 
    padding: 9px;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #2a74b0;
    border: none;
    transition: background-color 500ms;
    font-size: 25px;
    color: white;
    &:hover{
        cursor: pointer;
        background-color: #589bd1;
    }
`;

export const Calculate = styled.button` 
    padding: 9px;
    margin-top: 2%;
    border-radius: 8px;
    background-color: #99e8c2;
    border: none;
    transition: background-color 500ms;
    font-size: 25px;
    color: black;


    &:hover{
        cursor: pointer;
        background-color: #f0f0f0;
    }
`;