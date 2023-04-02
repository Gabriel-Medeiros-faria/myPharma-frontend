import { useNavigate } from "react-router";
import styled from "styled-components";

export default function Product(props) {
  const { name, description, price, image, id } = props;
  const navigate = useNavigate()

  return (
    <>
      <ProductContainer onClick={()=> navigate(`/productPage/${id}`)}>
        <img src={image} alt="Imagem do produto" />
        <InfosProduct>
          <p className="title">{name}</p>
          <p className="description">{description}</p>
        </InfosProduct>
        <Price>R$ {price},00</Price>
      </ProductContainer>
    </>
  );
}

const ProductContainer = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  img {
    width: 200px;
    height: 150px;
    padding: 15px;
  }
  :hover {
    transform: scale(1.1);
  }
`;

const InfosProduct = styled.div`
  .title {
    margin-bottom: 10px;
    font-weight: 500;
    color: #52b6ff;
  }
  .description {
    color: #989898;
    font-size: 15px;
  }
`;

const Price = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
`;
