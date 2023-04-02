import { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import FilterProduct from "../../Components/Home/filterProduct";
import ListProduct from "../../Components/Home/listProdutcs";
import SearchProductInput from "../../Components/Home/searchProductInput";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [fixedProducts, setFixedProducts] = useState([]);

  return (
    <>
      <Header />
      <HomePageContainer>
        <SearchProductComponents>
          <SearchProductInput
            products={products}
            setProducts={setProducts}
            fixedProducts={fixedProducts}
          />
          <FilterProduct />
        </SearchProductComponents>
        <ListProduct
          products={products}
          setProducts={setProducts}
          setFixedProducts={setFixedProducts}
        />
      </HomePageContainer>
    </>
  );
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchProductComponents = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
