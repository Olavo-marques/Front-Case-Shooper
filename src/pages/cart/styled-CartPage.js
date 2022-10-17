import styled from "styled-components"

export const ContainerBody = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerListInput = styled.div`
`
export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
`
export const BottonBack = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 30px;
    padding: 5px;
    width: 200px; 
    color: #FFFFFF;
    font-family: sans-serif;
    background-color: #2DA77A;
    &:hover{
        background-color: #025440;
    }
`
export const ContainerTotalForm = styled.div`
`
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 250px;
    }
`

export const Loading = styled.img`
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 350px;
        height: 350px;
    }
`
