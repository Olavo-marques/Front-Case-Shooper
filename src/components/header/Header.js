import { useNavigate } from 'react-router-dom'
import IMG_HEADER from '../../assets/images/img-header.png'
import { gotoCardPage, goToFeedPage, gotoHomePage } from '../../router/cordinator'
import * as S from './styled-Header'
import IMG_CART_FEED from "../../assets/images/img-carrinho-vazio.jpg";
import IMG_BOTTON_BACK from "../../assets/images/botao-verde.png";


const Header = (props) => {
    const navigate = useNavigate()

    // console.log("cartNow em header", cartNow)
    // console.log("hideCart em header", props.hideCart)
    return (
        <S.ContainerHeader>
            <S.ImgLogo src={IMG_HEADER} onClick={() => gotoHomePage(navigate)} />
            {
                props.hideCart === 1 ?
                    props.newCart.length > 0
                        ?
                        <S.BottonCart src={IMG_CART_FEED} onClick={() => gotoCardPage(navigate)} />
                        :
                        <div></div>
                    :
                    <S.ImgBack emptyCart={props.emptyCart} src={IMG_BOTTON_BACK} onClick={() => goToFeedPage(navigate)} />
            }

        </S.ContainerHeader>
    )
}

export default Header