import styled from "styled-components"

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
`

export const ImgLogo = styled.img`
height: 150px;
width: 400px;
cursor: pointer;
`
export const BottonCart = styled.img`
width: 100px;
height: 100px;
cursor: pointer;
margin-right: 50px;
`
export const ImgBack = styled.img`
width: 100px;
height: 100px;
cursor: pointer;
margin-right: 50px;
display:  ${props => props.emptyCart === false ? "" : "none"};;
`
