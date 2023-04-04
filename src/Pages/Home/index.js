import { useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import FilterProduct from "../../Components/Home/filterProduct";
import ListProduct from "../../Components/Home/listProdutcs";
import SearchProductInput from "../../Components/Home/searchProductInput";
import FilterProductBox from "../../Components/Home/filterProductBox";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [fixedProducts, setFixedProducts] = useState([]);
  const [openFilterBox, setOpenFilterBox] = useState(false);
  console.log(openFilterBox);

  function OpenOrCloseFIlterBox() {
    if (!openFilterBox) setOpenFilterBox(true);
    if (openFilterBox) setOpenFilterBox(false);
  }

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
          <FilterProductComponent>
            <FilterProduct OpenOrCloseFIlterBox={OpenOrCloseFIlterBox} />
            {openFilterBox ? (
              <FilterProductBox
                products={products}
                setProducts={setProducts}
                fixedProducts={fixedProducts}
                setFixedProducts={setFixedProducts}
              />
            ) : (
              ""
            )}
          </FilterProductComponent>
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

const FilterProductComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
