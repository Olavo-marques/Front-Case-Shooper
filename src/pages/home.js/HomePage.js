import { useNavigate } from 'react-router-dom'
import IMG_HOME from '../../assets/images/img-Home.png'
import { goToFeedPage } from '../../router/cordinator'
import * as S from './styled-HomePage'
const HomePage = () => {
    const navigate = useNavigate()

    return (
        <S.ContainerBody>
            <S.ContainerDescription>

                <S.Welcome>Bem vindo (a) à Shooper ヾ(＠⌒ー⌒＠)ノ</S.Welcome>
                <S.BigText>Aqui você compra </S.BigText>
                <S.BigText>sem ir ao mercado.</S.BigText>
                <S.LitleText>Automatizamos seu processo de comras, entregando </S.LitleText>
                <S.LitleText>melhores preços e uma experiência encantadora.</S.LitleText>
                <S.BottonProducts onClick={() => goToFeedPage(navigate)}>IR PARA PRODUTOS</S.BottonProducts>

            </S.ContainerDescription>

            <S.ContainerImgHome>

                <S.ImgHome src={IMG_HOME} />

            </S.ContainerImgHome>

        </S.ContainerBody>
    )
}

export default HomePage