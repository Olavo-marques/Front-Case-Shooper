import EMPYT_CART_IMG from "../../assets/images/carrinho-vazio-ultimo.png"
import IMG_REMOVE_CART from "../../assets/images/remove-cart.png";
import * as S from "./styled-ListCart";

const ListCart = (props) => {
  return (
    <div>
      {
        props.emptyCart === false && props.cartQuantity.length > 0 ?
          (
            <div>
              {
                props.cartQuantity.length > 0 ?
                  (
                    props.cartQuantity.map((product, index) => {
                      return (
                        <div key={index}>
                          <S.Product>
                            <S.ContainerDescription>
                              <S.TextDescription>{product.name}</S.TextDescription>
                            </S.ContainerDescription>

                            <S.Bottons>
                              <S.Price>R$: {product.price}</S.Price>
                              <S.BottonsLess src={IMG_REMOVE_CART} onClick={() => props.productLess(index, product.price)} />
                            </S.Bottons>
                          </S.Product>
                        </div>
                      )
                    })
                  )
                  :
                  (
                    <div></div>
                  )
              }
            </div>
          )
          :
          (
            <S.ContainerCartEmpty>
              <S.EmptyQuestionText>Seu carrinho está vazio?</S.EmptyQuestionText>
              <S.CartImg src={EMPYT_CART_IMG}></S.CartImg>
            </S.ContainerCartEmpty>
          )
      }
    </div>
  )
}

export default ListCart