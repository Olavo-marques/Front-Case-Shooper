import { URL_BASE } from "../../components/constants/url";
import { gotoCardPage } from "../../router/cordinator";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import * as S from "./styled-FeedPage";
import axios from "axios";

const FeedPage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [newCart, setNewCart] = useState([])
  const [displayCart, setDisplayCart] = useState(false)

  useEffect(() => {

    axios.get(`${URL_BASE}user/product`)
      .then((res) => {
        setProducts(res.data)
        console.log(res)
        // newCart.length > 0 ? setDisplayCart(true) : setDisplayCart(false)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
      })
  }, [])

  console.log("newCart", newCart)

  const addProduto = (id, name, price, qtyStock) => {
    console.log("addProduto")

    const newProduct = {
      id,
      name,
      price,
      qtyStock
    }

    alert(`${newProduct.name} Adicinado no Carrinho`)

    const newProductInsert = [...newCart, newProduct]

    setNewCart(newProductInsert)

    console.log("addProduto")
    localStorage.setItem("cartProducts", JSON.stringify(newProductInsert))
  }

  return (
    <S.ContainerBody>
      {
        newCart.length > 0  ?
          <S.BottonCart onClick={() => gotoCardPage(navigate)}>Carrinho</S.BottonCart>
          : <p>{""}</p>
      }
      <S.ContainerCards>
        {
          products.map((product) => {
            return (
              <S.CardProduct key={product.id}>

                <S.Stock>
                  <p>Em Estoque {product.qty_stock}</p>
                </S.Stock>

                <S.Description>
                  <S.Name>{product.name}</S.Name>
                </S.Description>

                <S.ContainerAdd>

                  <p>R${product.price}</p>

                  <S.BottonsAdd>

                    {/* <S.BottonsMore>➕</S.BottonsMore> */}

                    <S.Add onClick={() => addProduto(product.id, product.name, product.price, product.qty_stock)}>Adicionar</S.Add>

                    {/* <S.BottonsLess>➖</S.BottonsLess> */}

                  </S.BottonsAdd>

                </S.ContainerAdd>

              </S.CardProduct>
            )
          })
        }
      </S.ContainerCards>
    </S.ContainerBody >
  )
}

export default FeedPage