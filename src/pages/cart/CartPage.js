import InputCart from "../../components/input-cart/InputCart"
import IMG_LOADING from '../../assets/images/img-loading.gif'
import ListCart from "../../components/list-cart/ListCart"
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
  const [cartQuantity, setCartQuantity] = useState([])
  const [updateCart, setUpdateCart] = useState(false)
  const [emptyCart, setEmptyCart] = useState(false)
  const [test, setTest] = useState(false)
  const [price, setPrice] = useState(0)
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
    addRequest(form)
  }

  const productLess = (indice, productPrice) => {
    setPrice(price - productPrice)
    setUpdateCart(true)

    if (cartQuantity.length <= 1) {
      setCartQuantity(cartNow)

      let cartItems2 = []
      setCartQuantity(cartItems2)
      setEmptyCart(true)
      localStorage.setItem("cartProducts", JSON.stringify(cartItems2))
    }

    let cartItems = cartNow.filter((product, index) => {
      return index !== indice
    })

    setCartQuantity(cartItems)
    localStorage.setItem("cartProducts", JSON.stringify(cartItems))
  }

  const currentDate = new Date
  const formatUTC = currentDate.toLocaleDateString().split("/").reverse().join("-")

  const addRequest = (form) => {
    const totalPrice = sumCart + price

    if (form.date > formatUTC) {

      setTest(true)

      const body = {
        nameUser: form.name,
        deliveryDate: form.date,
        totalPrice: totalPrice,
        productList: cartQuantity
      }

      axios.post(`${URL_BASE}user/product/request`, body)
        .then((res) => {
          alert(res.data.message)
          alert("O tempo máximo de entrega e de 24 hrs a partir do pedido finalizado.")
          goToFeedPage(navigate)
        })
        .catch((err) => {
          alert(err.response.data.message)
        })

    } else if (form.date <= formatUTC) {
      alert("Insira uma data superior a data atual.")
    }
  }

  return (
    <S.ContainerBody>
      <Header emptyCart={emptyCart} />
      <S.Main>
        {
          test === false ?
            (
              < S.ContainerListInput >

                < S.ContainerInput >

                  <S.ContainerList>
                    <ListCart
                      emptyCart={emptyCart}
                      cartQuantity={cartQuantity}
                      productLess={productLess}
                    />

                  </S.ContainerList>

                  <InputCart
                    emptyCart={emptyCart}
                    register={register}
                    onChange={onChange}
                    sumCart={sumCart}
                    price={price}
                    form={form}
                  />

                </S.ContainerInput>

              </S.ContainerListInput>
            )
            :
            (
              <S.Loading src={IMG_LOADING} />
            )
        }
      </S.Main>
    </S.ContainerBody >
  )
}

export default CartPage