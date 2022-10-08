import React, { useEffect, useState } from "react";
import { URL_BASE } from "../../components/constants/url";
import { useNavigate } from "react-router-dom"
import * as S from "./styled-FeedPage";
import axios from "axios";
import { gotoCardPage } from "../../router/cordinator";

const FeedPage = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get(`${URL_BASE}user/product`)
            .then((res) => {
                setProducts(res.data)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
            })
    }, [])

    const addProduto = (id, name, price, qtyStock) => {
        console.log("addProduto")

        const body = {
            idProduct: id,
            nameProduct: name,
            price: price,
            qtyStock: qtyStock
        }
        axios.post(`${URL_BASE}user/cart`, body)
            .then((res) => {
                // setProducts(res.data)
                console.log(res)
                alert("Porduto Adicionado no Carrinho")
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data.message)
            })
    }

    return (
        <div>

            <S.BottonCart onClick={() => gotoCardPage(navigate)}>Carrinho</S.BottonCart>

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

                                        <S.BottonsMore>➕</S.BottonsMore>

                                        <S.Add onClick={() => addProduto(product.id, product.name, product.price, product.qty_stock)}>Adicionar</S.Add>

                                        <S.BottonsLess>➖</S.BottonsLess>

                                    </S.BottonsAdd>

                                </S.ContainerAdd>

                            </S.CardProduct>
                        )
                    })
                }
            </S.ContainerCards>
        </div >
    )
}

export default FeedPage