import styled from "styled-components";

export const Product = styled.div`
    display: flex;
    border: 1px solid #2DA77A;
    border-radius: 10px;
    margin: 10px 0 10px 0;
    height: 3em;
    width: 35em;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
        height: 30px;
        width: 300px;
    }
`
export const ContainerDescription = styled.div`
    display:flex;
    align-items: center;
    width: 30em;
`
export const TextDescription = styled.p`
    text-align: center;
    margin-left: 10px;
    font-family: sans-serif;
    font-size: 14px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 9px;
    }
`
export const Bottons = styled.div`
    display:flex;
    justify-content: space-between;
    width: 200px;
    align-items: center; 
    border-left: 1px solid #2DA77A;
`
export const Price = styled.p`
margin-left: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 10px;
    font-weight: 800;
    font-style: normal;
}
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
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width: 15px;
    height: 20px;
}
`
export const ContainerCartEmpty = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
export const EmptyQuestionText = styled.p`
    display: flex;
    flex-direction: column;
    color: #2DA77A;
    margin-top: 5em;
    font-size: 33px;
    font-family: sans-serif;
    align-items: center;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        font-size: 12px;
        width: 250px;
    }
`
export const CartImg = styled.img`
    border-radius: 5%;
    width: 30vw;
    height: 30vh;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 250px;
    }
`