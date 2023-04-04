import styled from "styled-components";

export default function SearchProductInput(props) {
  const { products, setProducts, fixedProducts } = props;

  function SearchProduct(value) {
    if (value === "") {
      setProducts(fixedProducts);
      return;
    }
    let newArrProducts = products.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(newArrProducts);
  }

  return (
    <>
      <SearchProductInputContainer
        placeholder="Procurar por produto"
        onChange={(e) => SearchProduct(e.target.value)}
      />
    </>
  );
}

const SearchProductInputContainer = styled.input`
  margin-top: 90px;
  width: 50%;
  height: 40px;
  padding: 5px;
  font-size: 15px;
  border-radius: 5px;
`;
