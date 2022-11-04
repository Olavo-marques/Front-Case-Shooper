import { goToFeedPage } from "../../router/cordinator"
import { useNavigate } from "react-router-dom";
import * as S from "./styled-InputCart";

const InputCart = (props) => {
  const navigate = useNavigate()

  return (
    <div>
      {
        props.emptyCart === false ?
          (
            <S.ContainerTotalForm>
              <S.Total>TOTAL: {(props.sumCart).toFixed(2)}</S.Total>

              <S.DateReceive>Insira seu nome e quando deseja receber?</S.DateReceive>
              <S.ContainerForm onSubmit={props.register}>

                <S.Input
                  name={"name"}
                  value={props.form.name}
                  onChange={props.onChange}
                  placeholder="Nome"
                  maxLength={"30"}
                  required
                  type={"text"}
                  pattern={"^.{5,}"}
                  title={"Mínimo seis caracteres"}
                />

                <S.Input
                  name={"date"}
                  value={props.form.date}
                  onChange={props.onChange}
                  required
                  type={"date"}
                />

                <S.FinalizeButton>Finalizar Pedido</S.FinalizeButton>
              </S.ContainerForm>
            </S.ContainerTotalForm>
          )
          :
          (
            <S.BottonAddProduct onClick={() => goToFeedPage(navigate)}>Experimente adicionar produtos</S.BottonAddProduct>
          )
      }
    </div>
  )
}

export default InputCart