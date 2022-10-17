import { gotoCardPage, goToFeedPage, gotoHomePage } from '../../router/cordinator'
import IMG_CART_FEED from "../../assets/images/img-carrinho-vazio.jpg";
import IMG_BOTTON_BACK from "../../assets/images/botao-verde.png";
import IMG_HEADER from '../../assets/images/img-header.png'
import { useNavigate } from 'react-router-dom'
import * as S from './styled-Header'


const Header = (props) => {
    const navigate = useNavigate()

    return (
        <S.ContainerHeader>
            <S.ImgLogo src={IMG_HEADER} alt="Logo Empresa" onClick={() => gotoHomePage(navigate)} />

            {
                props.hideCart === 1 ?
                    props.newCart.length > 0
                        ?
                        <S.BottonCart src={IMG_CART_FEED} alt="Botão/imagem carrinho" onClick={() => gotoCardPage(navigate)} />
                        :
                        <div></div>
                    :
                    <S.ImgBack emptyCart={props.emptyCart} src={IMG_BOTTON_BACK} onClick={() => goToFeedPage(navigate)} />
            }

        </S.ContainerHeader>
    )
}

export default Header