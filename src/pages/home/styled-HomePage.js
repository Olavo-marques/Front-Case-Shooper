import styled from 'styled-components'

export const ContainerBody = styled.div`
    display: flex; 
    align-items: center;
    margin-top: 18vh;
    flex-direction: row;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin-top: 10vh;
        flex-direction: column-reverse;
    }
`
export const ContainerDescription = styled.div`
    display: flex; 
    flex-basis: 50%;
    align-items: center;
    flex-direction: column;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        flex-direction: column;
        width: 70vw;
    }
`
export const ContainerImgHome = styled.div`
    display: flex; 
    flex-basis: 50%;
  
`
export const BackImg = styled.div`
    display: flex; 
    background-color: #2DA77A;
    width: 60vh;
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
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 30vh;
        height: 30vh;
    }
`
export const ImgHome = styled.img`
    width:50vw;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 50vw;
    }
`
export const ContainerWelcome = styled.div`
    width: 500px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 250px;
    }
    `
export const Welcome = styled.p`
    font-size: 18px;
    font-family:Lato;
    font-weight: 400;
    font-style: normal;
    line-height: 24px;
    color: #2da77a;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 22px;
        width: 240px;
        line-height: 35px;
        text-align: center;
        font-weight: 400;
        margin: 10 0px 0px 0px;
    }
`
export const BigText = styled.h1`
    font-size: 52px;
    font-family:sans-serif;
    font-weight: 700;
    font-style: normal;
    line-height: 65px;
    color: #1F1F1F;
    width: 500px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 14px;
        line-height: 20px;
        width: 250px;
        margin: 0;
    }
    `
export const LitleText = styled.p`
    font-size: 22px;
    font-family:Lato;
    font-weight: 400;
    font-style: normal;
    line-height: 30px;
    color: #4f4f4f;
    width: 500px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 14px;
        line-height: 20px;
        width: 250px;
        margin: 0;
    }
    `
export const ContainerBotton = styled.div`
    display: flex; 
    width: 500px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
        width: 250px;
    }
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
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 250px;
        padding: 5px;
        margin-top: 5px;
    }
`