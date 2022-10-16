import styled from "styled-components"

export const ContainerBody = styled.div`
    box-sizing: border-box;
`
export const ComponentCart = styled.div`
    display: flex;
    flex-basis: 15%;
    border: 1px solid red;
`
export const ContainerFather = styled.div`
    display: flex;
    width: 100vw;
`
export const BottonsLess = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    margin: 0 5px 0 5px;
    border-radius: 50px; 
    &:hover{
        color: red;
        background-color: red;
    }
`