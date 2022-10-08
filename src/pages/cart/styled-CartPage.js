import styled from "styled-components"

export const BottonBack = styled.h1`
cursor: pointer;
`
export const Product = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black;
width: 45vw;
`
export const Bottons = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 35%;
border: 1px solid red;
`
export const BottonsMore = styled.div`
display:flex;
align-items: center;
cursor: pointer;
margin: 0 5px 0 5px;
border-radius: 50px; 
color: green;
&:hover{
    background-color: green;
}
`
export const BottonsLess = styled.div`
display:flex;
align-items: center;
cursor: pointer;
margin: 0 5px 0 5px;
border-radius: 50px; 
&:hover{
    background-color: red;
}
`
