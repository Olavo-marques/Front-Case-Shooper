import styled from "styled-components"

export const ContainerTotalForm = styled.div`
`
export const Total = styled.h2`
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 15px;
    }
`
export const DateReceive = styled.h4`
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
    }
`
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        justify-content: space-between;
        align-items: center;
    }
`
export const Input = styled.input`
    height: 30px;
    width: 300px;
    border-radius: 10px;
    padding-left: 10px;
    margin-bottom: 20px;
    font-family: sans-serif;
    font-size: 16px;
    border: 1px solid green;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
        height: 20px;
        width: 200px;
    }
`
export const FinalizeButton = styled.button`
    width: 315px;
    border-radius: 10px;
    font-family: sans-serif;
    font-size: 23px;
    background-color: #2DA77A;
    padding: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    color: #FFF;
    &:hover{
        background-color: #025440;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
        width: 250px;
    }
`
export const BottonAddProduct = styled.h1`
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 50px;
    font-family: sans-serif;
    background-color: #2DA77A;
    padding: 10px;
    width: 16em;
    color: #FFF;
    &:hover{
        background-color: #025440;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
        width: 200px;
    }
`