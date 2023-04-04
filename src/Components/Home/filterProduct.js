import styled from "styled-components";

export default function FilterProduct(props) {

  const {OpenOrCloseFIlterBox} = props

  return (
    <>
      <FilterProductContainer onClick={()=> OpenOrCloseFIlterBox()}>
        V
      </FilterProductContainer>
    </>
  );
}

const FilterProductContainer = styled.div`
  width: 60px;
  height: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-top: 90px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;