import * as S from "./styled-CardFeed";

export const CardFeed = (props) => {
  return (
    <S.ContainerCards>
      {
        props.products.map((product) => {
          return (
            <S.CardProduct key={product.id}>

              <S.Stock>
                <p>Restam {product.qty_stock}</p>
              </S.Stock>

              <S.Description>
                <S.Name>{product.name}</S.Name>
              </S.Description>

              <S.ContainerAdd>

                <S.Price>R${product.price}</S.Price>

                <S.BottonsAdd>

                  <S.Add onClick={() => props.addProduto(product.id, product.name, product.price, product.qty_stock)}>Adicionar</S.Add>

                </S.BottonsAdd>

              </S.ContainerAdd>

            </S.CardProduct>
          )
        })
      }
    </S.ContainerCards>
  )
}