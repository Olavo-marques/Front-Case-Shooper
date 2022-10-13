import styled from 'styled-components'

export const ContainerBody = styled.div`
`
export const Main = styled.main`
display: flex; 
/* border: 2px solid red; */
/* justify-content: center; */
align-items: center;
margin-top: 18vh;
flex-direction: row;
/* height: 100vh; */
`
export const ContainerDescription = styled.div`
display: flex; 
flex-basis: 50%;
align-items: center;
flex-direction: column;
`
export const ContainerImgHome = styled.div`
display: flex; 
flex-basis: 50%;
/* border: 1px solid black; */
`
export const BackImg = styled.div`
display: flex; 
background-color: #2DA77A;
width: 63vh;
height: 60vh;
border-bottom-left-radius: 50%;
border-bottom-right-radius: 50%;
border-top-left-radius: 50%;
border-top-right-radius: 5%;
align-items: center;
justify-content: center;
transition: transform 0.5s;
&:hover{
    transform: rotateZ(360deg);
}
`
export const ImgHome = styled.img`
/* border: 1px solid black; */
`
export const ContainerWelcome = styled.div`
width: 500px;
/* border: 1px solid black; */
`
export const Welcome = styled.p`
font-size: 18px;
font-family:Lato;
font-weight: 400;
font-style: normal;
line-height: 24px;
color: #2da77a;
`
export const BigText = styled.h1`
font-size: 52px;
font-family:sans-serif;
font-weight: 700;
font-style: normal;
line-height: 65px;
color: #1F1F1F;
width: 500px;
/* border: 1px solid black; */
`
export const LitleText = styled.p`
font-size: 22px;
font-family:Lato;
font-weight: 400;
font-style: normal;
line-height: 30px;
color: #4f4f4f;
width: 500px;
/* border: 1px solid black; */
`
export const ContainerBotton = styled.div`
display: flex; 
width: 500px;
`
export const BottonProducts = styled.button`
font-size: 22px;
font-size: 16px;
font-family: sans-serif;
font-weight: 700;
font-style: normal;
line-height: 30px;
color: #F2FFFF;
padding: 10px;
border: none;
border-radius: 40px;
background-color: #2DA77A;
width: 300px;
cursor: pointer;
&:hover{
    background-color: #025440;
}
`