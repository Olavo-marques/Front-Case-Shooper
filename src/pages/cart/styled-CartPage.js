import styled from "styled-components"

export const BottonBack = styled.h1`
cursor: pointer;
border-radius: 5%;
background-color: #1DD342;
padding: 5px;
`
export const ContainerBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid black; */
margin-top: 25vh;
`
export const Product = styled.div`
display: flex;
justify-content: space-between;
/* border: 1px solid black; */
width: 40vw;
`
export const ContainerCartEmpty = styled.div`
display: flex;
align-items: center;
flex-direction: column;
/* width: 40vw; */
`
export const CartImg = styled.img`
border-radius: 5%;
width: 50vw;
height: 50vh;

`
export const Bottons = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 35%;
/* border: 1px solid red; */
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
export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100px;
/* border: 1px solid red; */
`
export const BottonAddProduct = styled.h1`
cursor: pointer;
border-radius: 5%;
background-color: #1DD342;
padding: 5px;
&:hover{
    background-color: #00FF40;
}
`
