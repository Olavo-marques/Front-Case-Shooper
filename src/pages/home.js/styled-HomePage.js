import styled from 'styled-components'

export const ContainerBody = styled.div`
display: flex; 
border: 2px solid red;
justify-content: center;
/* align-items: center; */
height: 100%;
flex-direction: row;
`
export const ContainerDescription = styled.div`
display: flex; 
flex-basis: 50%;
/* width: 50vh; */
/* height: 50vh; */
align-items: center;
flex-direction: column;
`
export const ContainerImgHome = styled.div`
display: flex; 
flex-basis: 50%;
/* width: 50vh; */
/* height: 50vh; */
`
export const ImgHome = styled.img`
/* width: 50vh;
height: 50vh;
margin-top: 10vh; */

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
`
export const LitleText = styled.p`
font-size: 22px;
font-family:Lato;
font-weight: 400;
font-style: normal;
line-height: 30px;
color: #4f4f4f;
`
export const BottonProducts = styled.button`font-size: 22px;
font-size: 16px;
font-family:Montserrat;
font-weight: 700;
font-style: normal;
line-height: 30px;
color: #F2FFFF;
padding: 10px;
border: none;
border-radius: 40px;
background-color: #2DA77A;
&:hover{
    background-color: #025440;
}
`