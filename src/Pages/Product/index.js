import styled from "styled-components"
import Header from "../../Components/Header/Header"
import ProductInformationOnTheProductPage from "../../Components/Product/productInformationOnTheProductPage"

export default function ProductPage(){
    return (
        <>
            <Header/>
            <ProductPageContainer>
                <ProductInformationOnTheProductPage/>
            </ProductPageContainer>
        </>
    )
}

const ProductPageContainer = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
`