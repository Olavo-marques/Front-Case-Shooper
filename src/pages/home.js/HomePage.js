import { useNavigate } from 'react-router-dom'
import IMG_HOME from '../../assets/images/img-Home.png'
import { goToFeedPage } from '../../router/cordinator'
import * as S from './styled-HomePage'
const HomePage = () => {
    const navigate = useNavigate()

    return (
        <S.ContainerBody>
            <S.Main>
                <S.ContainerDescription>

                    <S.ContainerWelcome>
                        <S.Welcome>Bem vindo (a) à Shooper ヾ(＠⌒ー⌒＠)ノ</S.Welcome>
                    </S.ContainerWelcome>

                    <S.BigText>Aqui você compra sem ir ao mercado.</S.BigText>
                    <S.LitleText>Automatizamos seu processo de compras, entregando melhores preços e uma experiência encantadora.</S.LitleText>

                    <S.ContainerBotton>
                        <S.BottonProducts onClick={() => goToFeedPage(navigate)}>IR PARA PRODUTOS</S.BottonProducts>
                    </S.ContainerBotton>

                </S.ContainerDescription>

                <S.ContainerImgHome>

                    <S.BackImg>
                        <S.ImgHome src={IMG_HOME} />
                    </S.BackImg>

                </S.ContainerImgHome>
            </S.Main>

        </S.ContainerBody>
    )
}

export default HomePage