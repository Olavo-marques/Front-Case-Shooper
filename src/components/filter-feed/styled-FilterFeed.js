import styled from "styled-components"

export const ContainerFilter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 30px;
` 
export const InputSearsh = styled.div`
    display: flex;
    justify-content: center;
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
export const ContainerSelect = styled.div`
    display: flex;
    justify-content: center;
`
export const SelectInput = styled.select`
    height: 30px;
    width: 200px;
    border-radius: 10px;
    padding-left: 10px;
    margin-bottom: 20px;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0px 10px 0 10px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;
        height: 15px;
        width: 300px;
    }
`
export const ButtonReset = styled.button`
    height: 30px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid;
    padding-left: 10px;
    margin-bottom: 20px;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0px 10px 0 10px;
    color: red;
    cursor: pointer;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 10px;
        height: 15px;
        width: 300px;
    }
`