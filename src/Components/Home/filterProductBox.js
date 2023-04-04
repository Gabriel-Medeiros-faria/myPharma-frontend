import styled from "styled-components";

export default function FilterProductBox(props) {
  const { products, setProducts } = props;

  function SortPrice(order) {
    const newArray = [
      ...products.sort((a, b) => {
        return order ? a.price - b.price : b.price - a.price;
      }),
    ];
    setProducts([...newArray]);
  }

  return (
    <>
      <FilterProductBoxContainer>
        <p onClick={() => SortPrice(false)}>Maior preço</p>
        <p onClick={() => SortPrice(true)}>Menor preço</p>
      </FilterProductBoxContainer>
    </>
  );
}

const FilterProductBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  width: 120px;
  height: 80px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  p {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
    }
  }
`;
