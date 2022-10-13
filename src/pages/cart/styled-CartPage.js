import styled from "styled-components"

export const ContainerBody = styled.div`
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Main = styled.main`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
/* border: 1px solid red; */
`
export const ContainerList = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
/* align-items: center; */
/* border: 1px solid black; */
margin-top: 2em;
`
export const EmptyQuestionText = styled.p`
display: flex;
flex-direction: column;
color: #2DA77A;
margin-top: 5em;
font-size: 33px;
font-family: sans-serif;
border: 1px solid yellow;

`

export const BottonBack = styled.h1`
/* cursor: pointer;
border-radius: 5%;
background-color: #2DA77A;
padding: 5px; */
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 30px;
padding: 5px;
width: 200px; 
color: #FFFFFF;
font-family: sans-serif;
/* font-size: A ; */
background-color: #2DA77A;
&:hover{
    background-color: #025440;
}
`
export const Product = styled.div`
display: flex;
/* justify-content: start; */
border: 2px solid #2DA77A;
border-radius: 10px;
margin: 10px 0 10px 0;
height: 3em;
width: 35em;
`
export const ContainerCartEmpty = styled.div`
display: flex;
align-items: center;
flex-direction: column;
/* width: 40vw; */
/* border: 1px solid yellow; */
`
export const CartImg = styled.img`
border-radius: 5%;
width: 30vw;
height: 30vh;
/* border: 1px solid red; */

`
export const ContainerDescription = styled.div`
display:flex;
align-items: center;
/* justify-content: center; */
width: 30em;
/* align-items: center;  */
/* justify-content: center;  */
/* border: 1px solid blue; */
`
export const TextDescription = styled.p`
text-align: center;
margin-left: 10px;
font-family: sans-serif;
font-size: 14px;
`
export const Bottons = styled.div`
display:flex;
justify-content: space-between;
width: 200px;
align-items: center; 
/* justify-content: center;  */
border-left: 2px solid #2DA77A;

`
export const Price = styled.p`
margin-left: 10px;

`
export const BottonsLess = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
padding: 5px;
&:hover{
    border-radius: 50px;
    border: 2px solid red;
}

`
export const ContainerInput = styled.div`
/* border: 1px solid violet; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */
border-radius: 50px;
/* height: 20em; */
`
export const ContainerTotalForm = styled.div`
/* display: flex; */
/* flex-direction: column; */
/* justify-content: center; */
/* height: 100px; */
/* border: 1px solid red; */
`
export const Total = styled.h2`
display: flex;
/* flex-direction: column; */
justify-content: center;
font-family: sans-serif;
/* height: 100px; */
/* border: 1px solid red; */
`
export const DateReceive = styled.h4`
display: flex;
/* flex-direction: column; */
justify-content: center;
font-family: sans-serif;
/* align-items: center; */
/* height: 100px; */
/* border: 1px solid red; */
`
export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
/* height: 100px; */
/* border: 1px solid red; */
`
export const Input = styled.input`
/* display: flex; */
height: 30px;
width: 300px;
border-radius: 10px;
padding-left: 10px;
margin-bottom: 20px;
font-family: sans-serif;
font-size: 16px;
/* border: 1px solid red; */
`
export const FinalizeButton = styled.button`
/* display: flex; */
/* height: 32px; */
width: 315px;
border-radius: 10px;
font-family: sans-serif;
font-size: 23px;
background-color: #2DA77A;
padding: 5px;
/* padding-left: 10px; */
margin-bottom: 10px;
cursor: pointer;
/* border: 1px solid red; */
color: #FFF;
&:hover{
    background-color: #025440;
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
`
