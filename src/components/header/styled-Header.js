import styled from "styled-components"

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ImgLogo = styled.img`
    width: 400px;
    height: 150px;
    cursor: pointer;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 100px;
        height: 50px;
    }
`
export const BottonCart = styled.img`
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin: 20px 90px 0px 0px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 30px;
        height: 30px;
        margin: 12px 30px 0px 0px;
    }
`
export const ImgBack = styled.img`
    width: 100px;
    height: 100px;
    cursor: pointer;
    margin: 20px 115px 0px 0px;
    display:  ${props => props.emptyCart === false ? "" : "none"};
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 30px;
        height: 30px;
        margin: 12px 30px 0px 0px;
    }
`
