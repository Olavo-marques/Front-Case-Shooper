import * as S from "./styled-FilterFeed";

const FilterFeed = (props) => {
    return (
        <S.ContainerFilter>
            <S.InputSearsh>
                <S.Input
                    name={"searsh"}
                    value={props.searchInput}
                    onChange={props.onChangeSearch}
                    placeholder="Buscar"
                    maxLength={"30"}
                    type={"text"}
                />
            </S.InputSearsh>
            <S.ContainerSelect>

                <S.SelectInput value={props.nameOrPriceInput} onChange={props.onChangeNameOrPriceInput}>
                    <option value="Default">Default</option>
                    <option value="name">Descrição</option>
                    <option value="price">Preço</option>
                </S.SelectInput>

                <S.SelectInput value={props.orderInput} onChange={props.onChangeOrderInput}>
                    <option value="Default">Default</option>
                    <option value="ASC">Crescente</option>
                    <option value="DESC">Decrescente</option>
                </S.SelectInput>

                <S.ButtonReset onClick={props.cleanFIlters}>Reset</S.ButtonReset>

            </S.ContainerSelect>

        </S.ContainerFilter>
    )
}

export default FilterFeed