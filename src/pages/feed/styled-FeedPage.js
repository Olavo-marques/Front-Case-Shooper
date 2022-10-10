import styled from "styled-components"

export const CardProduct = styled.div`
border: 1px solid black;
border-radius: 1px;
display: flex;
/* flex-wrap: nowrap; */
flex-direction: column;
/* width: 15vw; */
border-radius: 5%;
width: 250px;
height: 25vh;
`
export const ContainerCards = styled.div`
display: flex;
flex-wrap: wrap;
width: 100vw;
justify-content: center;
/* flex-shrink: 1; */
row-gap: 10px;
column-gap: 15px;
flex-basis: 85%;
`
export const ComponentCart = styled.div`
display: flex;
flex-basis: 15%;
/* width: 100vw; */
border: 1px solid red;
`
export const ContainerFather = styled.div`
display: flex;
width: 100vw;
`
export const ContainerAdd = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
/* width: 100%; */
/* justify-content: center; */
align-items: center;
/* margin: 5px; */
flex-basis: 40%;
`
export const Stock = styled.div`
display: flex;
flex-basis: 10%;
align-items: center;
justify-content: center;
margin: 5px;
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
`
export const Add = styled.div`
/* border: 1px solid red; */
border-radius: 10px;
padding: 5px;
display:flex;
/* flex-shrink: 1; */
cursor: pointer;
&:hover{
    background-color: green;
} 
`
export const BottonsAdd = styled.div`
display:flex;
align-items: center;
padding-bottom: 5px;
`
export const BottonsMore = styled.div`
display:flex;
align-items: center;
cursor: pointer;
margin: 0 5px 0 5px;
border-radius: 50px; 
&:hover{
    color: red;
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
    color: red;
    background-color: red;
}
`
export const BottonCart = styled.h1`
cursor: pointer;

`