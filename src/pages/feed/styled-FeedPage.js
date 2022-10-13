import styled from "styled-components"

export const ContainerBody = styled.div`
box-sizing: border-box;
`
export const ContainerCards = styled.div`
display: flex;
flex-wrap: wrap;
/* width: 100vw; */
justify-content: center;
row-gap: 30px;
column-gap: 30px;
flex-basis: 85%;
/* margin-top: 5vh; */

`

export const CardProduct = styled.div`
border: 2px solid green;
border-radius: 1px;
display: flex;
/* flex-wrap: nowrap; */
flex-direction: column;
/* width: 15vw; */
border-radius: 5%;
width: 250px;
height: 25vh;
transition: transform 1s;
&:hover{
    transform: scale(1.2);
}
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
/* border: 1px solid black; */
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
background-attachment: fixed;
color: #FFF;
font-family: sans-serif;
/* &:hover{
    background-color: #025440;
}  */
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