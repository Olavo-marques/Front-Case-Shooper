import EMPYT_CART_IMG from "../../assets/images/carrinho-vazio-shooper.png"
import { renderIntoDocument } from "react-dom/test-utils"
import { URL_BASE } from "../../components/constants/url"
import { goToFeedPage } from "../../router/cordinator"
import useForm from "../../components/hooks/useForm"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import * as S from "./styled-CartPage";
import axios from "axios"

const CartPage = () => {
  const navigate = useNavigate()
  const cartNow = JSON.parse(localStorage.getItem('cartProducts'))
  const [productsInCart, setProductsInCart] = useState([])
  const [productRepeat, setProductRepeat] = useState()
  const [emptyCart, setEmptyCart] = useState(false)
  const [cartQuantity, setCartQuantity] = useState([])
  const [sumUpdata, setSumUpdata] = useState(0)
  let [price, setPrice] = useState(0)
  const { form, onChange } = useForm({
    date: "",
  })

  let sumCart = 0
  for (let i = 0; i < cartNow.length; i++) {
    sumCart += cartNow[i]["price"]
  }

  useEffect(() => {
    setProductsInCart(cartNow)
  }, [])

  // console.log("sumUpdata", sumUpdata)

  const register = (event) => {
    event.preventDefault();
    console.log(form)
  }

  const productLess = (indice, productPrice) => {
    setPrice(price - productPrice)
    console.log("cartQuantity.length === 1", cartQuantity.length === 1)
    console.log("cartQuantity.length  === 0", cartQuantity.length === 0)
    console.log("cartQuantity.length", cartQuantity.length)
    if (cartQuantity.length === 0) {
      let cartItems2 = []
      setCartQuantity(cartItems2)
      setProductsInCart(cartItems2)
      setEmptyCart(true)
    }

    let cartItems = cartNow.filter((product, index) => {
      return index !== indice
    })

    setCartQuantity(cartItems)
  }

  const productLessCopy = (indice, productPrice) => {
    setPrice(price - productPrice)

    if (cartQuantity.length >= 2) {
      let cartItems = cartQuantity.filter((product, index) => {
        return index !== indice
      })

      setCartQuantity(cartItems)

    } else if (cartQuantity.length < 2) {
      let cartItems2 = []
      setCartQuantity(cartItems2)
      setProductsInCart(cartItems2)
      setEmptyCart(true)
    }
  }

  return (
    <S.ContainerBody>
      <div>
        {
          emptyCart === false ?
            <S.BottonBack onClick={() => goToFeedPage(navigate)}>Faltou algo?</S.BottonBack>
            : <div>.</div>
        }
      </div>
      <div>
        {
          emptyCart === false ?
            <div>
              {
                cartQuantity.length > 0 ?
                  cartQuantity.map((product, indice) => {
                    return (

                      <div key={indice}>
                        <S.Product>
                          <div> {product.name}</div>

                          <S.Bottons>
                            <div>Preço: {product.price}</div>

                            <S.BottonsLess onClick={() => productLessCopy(indice, product.price)}>➖</S.BottonsLess>

                          </S.Bottons>
                        </S.Product>
                      </div>
                    )
                  })
                  :
                  productsInCart.map((product, index) => {
                    return (
                      <div key={index}>
                        <S.Product>
                          <div> {product.name}</div>

                          <S.Bottons>
                            <div>Preço: {product.price}</div>
                            <S.BottonsLess onClick={() => productLess(index, product.price)}>➖</S.BottonsLess>
                          </S.Bottons>
                        </S.Product>
                      </div>
                    )
                  })
              }
            </div>
            : <S.ContainerCartEmpty> <h1>Seu carrinho está vazio?</h1> <S.CartImg src={EMPYT_CART_IMG}></S.CartImg></S.ContainerCartEmpty>
        }
      </div>
      < div >
        {
          emptyCart === false ?
            <div>
              <h4>TOTAL: {(sumCart + price).toFixed(2)}</h4>

              <form onSubmit={register}>

                <h4>Qunado deseja receber?</h4>
                <input
                  name={"date"}
                  value={form.date}
                  onChange={onChange}
                  placeholder="Mínimo 6 caracteres"
                  required
                  type={"date"}
                />
                <button>Finalizar Pedido</button>
              </form>
            </div>
            : <S.BottonAddProduct onClick={() => goToFeedPage(navigate)}>Experimente adicionar produtos</S.BottonAddProduct>
        }
      </div>
    </S.ContainerBody >
  )
}

export default CartPage