import { URL_BASE } from "../../components/constants/url"
import { goToFeedPage } from "../../router/cordinator"
import useForm from "../../components/hooks/useForm"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import * as S from "./styled-CartPage";
import axios from "axios"
import { renderIntoDocument } from "react-dom/test-utils"

const CartPage = () => {
  const navigate = useNavigate()
  const [productsInCart, setProductsInCart] = useState([])
  const [price, setPrice] = useState()
  const [sumUpdata, setSumUpdata] = useState()
  const { form, onChange } = useForm({
    date: "",
  })

  useEffect(() => {
    axios.get(`${URL_BASE}user/product/cart`)
      .then((res) => {
        setProductsInCart(res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
      })
  }, [])

  const register = (event) => {
    event.preventDefault();
    console.log(form)
  }

  let sumCart = 0

  for (let i = 0; i < productsInCart.length; i++) {
    sumCart += productsInCart[i]["price"]
  }

  const upudatePrice = (productPrice, sumCart) => {
    setPrice(price + productPrice + sumCart)
    setSumUpdata(sumCart + productPrice)
  }

  return (
    <div>
      <S.BottonBack onClick={() => goToFeedPage(navigate)}>Voltar</S.BottonBack>

      <div>
        {
          productsInCart && productsInCart.map((product) => {
            // console.log(sumCart)
            return (
              <div key={product.id}>
                <S.Product>
                  <div> {product.name}</div>

                  <S.Bottons>
                    <S.BottonsMore onClick={() => upudatePrice(product.price, sumCart)}>➕</S.BottonsMore>

                    <div>Preço: {product.price}</div>

                    <S.BottonsLess>➖</S.BottonsLess>

                  </S.Bottons>
                </S.Product>
              </div>
            )
          })
        }

        <h4>TOTAL: {sumCart.toFixed(2)}</h4>
        <h4>TOTAL: {sumUpdata}</h4>

      </div>

      <form onSubmit={register}>

        <input
          name={"date"}
          value={form.date}
          onChange={onChange}
          placeholder="Mínimo 6 caracteres"
          required
          type={"date"}
        />

        <button>Data de Entrega</button>
      </form>

    </div>
  )
}

export default CartPage