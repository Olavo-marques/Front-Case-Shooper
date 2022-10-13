import EMPYT_CART_IMG from "../../assets/images/carrinho-vazio-ultimo.png"
import IMG_REMOVE_CART from "../../assets/images/remove-cart.png"
import { goToFeedPage } from "../../router/cordinator"
import useForm from "../../components/hooks/useForm"
import Header from "../../components/header/Header"
import { useNavigate } from "react-router-dom"
import { URL_BASE } from "../../constants/url"
import { useEffect, useState } from "react"
import * as S from "./styled-CartPage";
import axios from "axios"

const CartPage = () => {
  const cartNow = JSON.parse(localStorage.getItem('cartProducts'))
  const [productsInCart, setProductsInCart] = useState([])
  const [productRepeat, setProductRepeat] = useState()
  const [cartQuantity, setCartQuantity] = useState([])
  const [updateCart, setUpdateCart] = useState(false)
  const [emptyCart, setEmptyCart] = useState(false)
  const [checkDate, setCheckDate] = useState(false)
  let [price, setPrice] = useState(0)
  const navigate = useNavigate()
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
    if (cartNow.length === 0) {
      setEmptyCart(true)
    }
  }, [updateCart])

  const register = (event) => {
    event.preventDefault();
    console.log(form)
    addRequest(form)
  }

  const productLess = (indice, productPrice) => {
    setPrice(price - productPrice)
    setUpdateCart(true)

    if (cartQuantity.length <= 1) {
      setCartQuantity(cartNow)

      let cartItems2 = []
      setCartQuantity(cartItems2)
      setProductsInCart(cartItems2)
      setEmptyCart(true)
      localStorage.setItem("cartProducts", JSON.stringify(cartItems2))
    }

    let cartItems = cartNow.filter((product, index) => {
      return index !== indice
    })

    setCartQuantity(cartItems)
    localStorage.setItem("cartProducts", JSON.stringify(cartItems))
  }

  // const newCartQuantity = [...cartQuantity]
  // console.log("newCartQuantity", newCartQuantity)

  // const cuntRepeat = (array, valeu) => {
  //   cartQuantity.reduce((acc, value) => {
  //     return value === item ? acc + 1 : acc, 0
  //   })
  // }

  const currentDate = new Date
  const formatUTC = currentDate.toLocaleDateString().split("/").reverse().join("-")

  const addRequest = (form) => {
    const totalPrice = sumCart + price
    console.log('form.date', form.date)
    console.log('formatUTC', formatUTC + 1)
    // setCheckDate(formatUTC)
    if (form.date > formatUTC) {
      const body = {
        nameUser: form.name,
        deliveryDate: form.date,
        totalPrice: totalPrice,
        productList: cartQuantity
      }

      console.log("body", body)

      localStorage.removeItem("cartProducts")

      axios.post(`${URL_BASE}user/product/cart`, body)
        .then((res) => {
          alert(res.data.message)
          alert("O tempo máximo de entrega e de 24 hrs a partir do pedido finalizado.")
          goToFeedPage(navigate)
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
        })
    } else if (form.date <= formatUTC) {
      alert("Insira uma data superior a data atual.")
    }

  }

  return (            // Rever problema de descontar aopneas um item do carrinho
    <S.ContainerBody>
      <Header emptyCart={emptyCart} />
      <S.Main>
        <S.ContainerList>
          {
            emptyCart === false && cartQuantity.length > 0 ?
              (
                <div>
                  {
                    cartQuantity.length > 0 ?
                      (
                        cartQuantity.map((product, index) => {
                          return (
                            <div key={index}>
                              <S.Product>
                                <S.ContainerDescription>
                                  <S.TextDescription>{product.name}</S.TextDescription>
                                </S.ContainerDescription>

                                <S.Bottons>
                                  <S.Price>Preço: {product.price}</S.Price>
                                  <S.BottonsLess src={IMG_REMOVE_CART} onClick={() => productLess(index, product.price)} />
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
        </S.ContainerList>
        < S.ContainerInput >
          {
            emptyCart === false ?
              (
                <S.ContainerTotalForm>
                  <S.Total>TOTAL: {(sumCart + price).toFixed(2)}</S.Total>

                  <S.DateReceive>Quando deseja receber?</S.DateReceive>
                  <S.ContainerForm onSubmit={register}>

                    <S.Input
                      id="name"
                      name={"name"}
                      value={form.name}
                      onChange={onChange}
                      placeholder="Nome"
                      maxLength={"30"}
                      required
                      type={"text"}
                      pattern={"^.{5,}"}
                      title={"Mínimo seis caracteres"}
                    />

                    <S.Input
                      name={"date"}
                      value={form.date}
                      onChange={onChange}
                      required
                      type={"date"}
                    />

                    <S.FinalizeButton>Finalizar Pedido</S.FinalizeButton>
                  </S.ContainerForm>
                </S.ContainerTotalForm>
              )
              : <S.BottonAddProduct onClick={() => goToFeedPage(navigate)}>Experimente adicionar produtos</S.BottonAddProduct>
          }
        </S.ContainerInput>
      </S.Main>
    </S.ContainerBody >
  )
}

export default CartPage