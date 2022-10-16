import FilterFeed from "../../components/filter-feed/FilterFeed";
import { CardFeed } from "../../components/card-feed/CardFeed";
import Header from "../../components/header/Header";
import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../constants/url";
import * as S from "./styled-FeedPage";
import axios from "axios";

const FeedPage = () => {
  const [nameOrPriceInput, setNameOrPriceInput] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [orderInput, setOrderInput] = useState("")
  const [products, setProducts] = useState([])
  const [hideCart, setHideCart] = useState(0)
  const [newCart, setNewCart] = useState([])

  const onChangeSearch = (event) => {
    setSearchInput(event.target.value)
  }
  const onChangeNameOrPriceInput = (event) => {
    setNameOrPriceInput(event.target.value)
  }
  const onChangeOrderInput = (event) => {
    setOrderInput(event.target.value)
  }
  const cleanFIlters = (event) => {
    setSearchInput("")
    setOrderInput("")
    setOrderInput("")
  }

  useEffect(() => {

    axios.get(`${URL_BASE}user/product?search=${searchInput}&nameOrPrice=${nameOrPriceInput}&order=${orderInput}`)

      .then((res) => {
        setProducts(res.data)
        setHideCart(1)
        localStorage.setItem("whichScreen", hideCart)
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [searchInput, nameOrPriceInput, orderInput])

  const addProduto = (id, name, price, qtyStock) => {
    const newProduct = {
      id,
      name,
      price,
      qtyStock
    }

    alert(`${newProduct.name} Adicinado no Carrinho`)
    const newProductInsert = [...newCart, newProduct]
    setNewCart(newProductInsert)

    localStorage.setItem("cartProducts", JSON.stringify(newProductInsert))
  }

  return (
    <S.ContainerBody>

      <Header
        hideCart={hideCart}
        newCart={newCart}
      />

      <FilterFeed
        onChangeNameOrPriceInput={onChangeNameOrPriceInput}
        onChangeOrderInput={onChangeOrderInput}
        nameOrPriceInput={nameOrPriceInput}
        onChangeSearch={onChangeSearch}
        cleanFIlters={cleanFIlters}
        searchInput={searchInput}
        orderInput={orderInput}
      />

      <CardFeed
        products={products}
        addProduto={addProduto}
      />

    </S.ContainerBody >
  )
}

export default FeedPage