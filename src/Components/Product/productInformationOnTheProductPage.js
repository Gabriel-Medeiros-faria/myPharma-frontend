import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

export default function ProductInformationOnTheProductPage() {
  const [product, setProduct] = useState({})

  const {id} = useParams()


  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_DB_URL}products/${id}`)
      .then((resp)=> {
        console.log(resp.data)
        setProduct(resp.data)
      })
      .catch((err)=> console.log(err))
  },[])

  return (
    <>
      <ProductInformationContainer>
        <ImageProduct>
          <img
            src={product.image}
            alt="Imagem do produto"
          />
        </ImageProduct>
        <InfoProduct>
          <PriceAndAddAmount>
            <p className="price">R${product.price},00</p>
            <Amount>
              <span>+</span> 1 <span>-</span>
            </Amount>
          </PriceAndAddAmount>

          <p className="title">{product.name}</p>
          <p className="description">{product.description}</p>
        <ButtonToAddCart>Comprar</ButtonToAddCart>
        </InfoProduct>
      </ProductInformationContainer>
    </>
  );
}

const ProductInformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
`;

const ImageProduct = styled.div`
  width: 35%;
  img {
    width: 100%;
    height: 300px;
  }
`;

const InfoProduct = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: initial;
  width: 30%;
  height: 300px;
  position: relative;
  .price {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
    margin-bottom: 10px;
    color: #52b6ff;
  }
  .description {
    font-size: 15px;
  }
`;

const Amount = styled.div`
  background-color: #dfdfdf;
  margin-left: 20px;
  font-size: 25px;
  width: 100%;
  height: 62%;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
  }
`;

const PriceAndAddAmount = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonToAddCart = styled.div`
background-color: #52b6ff;
border-radius: 5px;
display: flex;
width: 100%;
position: absolute;
bottom: 0;
justify-content: center;
align-items: center;
height: 30px;
color: white;
cursor: pointer;
`