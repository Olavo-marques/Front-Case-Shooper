import styled from "styled-components";

export const ContainerCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 30px;
    column-gap: 30px;
    flex-basis: 85%;
    margin-top: 5vh;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        row-gap: 10px;
        column-gap: 10px;
    }
`

export const CardProduct = styled.div`
    border: 2px solid green;
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    width: 250px;
    height: 30vh;
    transition: transform 0.5s;
    &:hover{
        transform: scale(1.2);
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 150px;
        height: 150px;
        &:hover{
            transform: scale(1.1);
        }
    }
`
export const Stock = styled.div`
    display: flex;
    flex-basis: 10%;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-size: 12px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;
    }
`
export const Description = styled.div`
    display: flex;
    flex-basis: 50%;
    align-items: center;
    justify-content: center;
    margin: 5px;
`
export const Name = styled.div`
    text-align: center;
    font-size: 12px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;
    }
`
export const ContainerAdd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 40%;
`
export const Price = styled.p`
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
    }
`
export const Add = styled.div`
    background-attachment: fixed;
    color: #FFF;
    font-family: sans-serif;
`
export const BottonsAdd = styled.div`
    display:flex;
    border-radius: 50px; 
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    background-color: #2DA77A;
    width: 100px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        padding: 10px;
        background-color: #025440;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        padding: 2px;
        &:hover{
        padding: 4px;
        background-color: #025440;
    }
    }
`