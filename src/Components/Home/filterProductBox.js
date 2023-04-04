import styled from "styled-components"

export default function FilterProductBox(props){

    const {products, setProducts, fixedProducts, setFixedProducts} = props
    const arrayOrdenado = []

    function BiggestPrice(){
        for (let i = 0; i < products.length; i++) {
            let valorAtual = products[i];
            let j;
          
            // Encontra o lugar correto do valor atual no novo array ordenado
            for (j = 0; j < arrayOrdenado.length; j++) {
              if (valorAtual < arrayOrdenado[j]) {
                break;
              }
            }
          
            // Insere o valor atual no novo array ordenado
            arrayOrdenado.splice(j, 0, valorAtual);
          }
          setProducts(arrayOrdenado)
    }

    return(
        <>
            <FilterProductBoxContainer>
                <p onClick={()=> BiggestPrice()}>Maior preço</p>
                <p>Menor preço</p>
            </FilterProductBoxContainer>
        </>
    )
}

const FilterProductBoxContainer = styled.div`
display: flex;
align-items:center;
padding:5px;
width: 120px;
height: 80px;
border-radius: 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
p{
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
:hover {
    transform: scale(1.1);
  }
}
`