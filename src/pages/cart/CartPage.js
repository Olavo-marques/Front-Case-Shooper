import EMPYT_CART_IMG from "../../assets/images/carrinho-vazio-shooper.png"
import { renderIntoDocument } from "react-dom/test-utils"
import { URL_BASE } from "../../components/constants/url"
import { gotoCardPage, goToFeedPage } from "../../router/cordinator"
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
    name: "",
    date: ""
  })

  let sumCart = 0
  for (let i = 0; i < cartNow.length; i++) {
    sumCart += cartNow[i]["price"]
  }

  useEffect(() => {
    setCartQuantity(cartNow)
    setProductsInCart(cartNow)
  }, [])


  const register = (event) => {
    event.preventDefault();
    console.log(form)
    addRequest(form)
  }

  const productLess = (indice, productPrice) => {
    setPrice(price - productPrice)

    if (cartNow.length === 1) {
      // if (cartQuantity.length === 1) {
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

  // const newCartQuantity = [...cartQuantity]
  // console.log("newCartQuantity", newCartQuantity)

  // const cuntRepeat = (array, valeu) => {
  //   cartQuantity.reduce((acc, value) => {
  //     return value === item ? acc + 1 : acc, 0
  //   })
  // }

  // console.log(cuntRepeat)

  const addRequest = (form) => {
    const totalPrice = sumCart + price

    const body = {
      nameUser: form.name,
      deliveryDate: form.date,
      totalPrice: totalPrice,
      productList: cartQuantity
    }

    console.log("body", body)

    axios.post(`${URL_BASE}user/product/cart`, body)
      .then((res) => {
        alert(res.data.message)
        goToFeedPage(navigate)
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.message)
      })
  }

  return (            // Rever problema de descontar aopneas um item do carrinho
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

              <h4>Quando deseja receber?</h4>
              <S.ContainerForm onSubmit={register}>
                <input
                  name={"name"}
                  value={form.name}
                  onChange={onChange}
                  placeholder="Nome"
                  required
                  type={"text"}
                />
                <input
                  name={"date"}
                  value={form.date}
                  onChange={onChange}
                  required
                  type={"date"}
                />
                <button>Finalizar Pedido</button>
              </S.ContainerForm>
            </div>
            : <S.BottonAddProduct onClick={() => gotoCardPage(navigate)}>Experimente adicionar produtos</S.BottonAddProduct>
        }
      </div>
    </S.ContainerBody >
  )
}

export default CartPage