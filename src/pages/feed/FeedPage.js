import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../constants/url";
import * as S from "./styled-FeedPage";
import axios from "axios";

const FeedPage = () => {
  const [products, setProducts] = useState([])
  const [newCart, setNewCart] = useState([])
  const [hideCart, setHideCart] = useState(0)

  useEffect(() => {

    axios.get(`${URL_BASE}user/product`)
      .then((res) => {
        setProducts(res.data)
        console.log(res)
        setHideCart(1)
        localStorage.setItem("whichScreen", hideCart)
      })
      .catch((err) => {
        console.log(err)
        console.log(err.response)
      })
  }, [])

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

      <Header hideCart={hideCart} newCart={newCart} />

      <S.ContainerCards>
        {
          products.map((product) => {
            return (
              <S.CardProduct key={product.id}>

                <S.Stock>
                  <p>Restam {product.qty_stock} unidades</p>
                </S.Stock>

                <S.Description>
                  <S.Name>{product.name}</S.Name>
                </S.Description>

                <S.ContainerAdd>

                  <p>R${product.price}</p>

                  <S.BottonsAdd>

                    <S.Add onClick={() => addProduto(product.id, product.name, product.price, product.qty_stock)}>Adicionar</S.Add>

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